"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../config/mysql");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, password } = req.body;
    let query = `SELECT * FROM users WHERE user_name = '${user_name}'`;
    (0, mysql_1.Connect)()
        .then((connection) => {
        (0, mysql_1.Query)(connection, query)
            .then((rs) => __awaiter(void 0, void 0, void 0, function* () {
            const validPassword = yield bcrypt_1.default.compare(password, rs[0].password);
            const item = rs[0];
            if (validPassword) {
                const token = jsonwebtoken_1.default.sign({ user_id: item.id, user_name: item === null || item === void 0 ? void 0 : item.user_name }, 'secretTokenKey', {
                    expiresIn: "2h",
                });
                // save user token
                item.token = token;
                // user
                return res.status(200).json({
                    message: validPassword,
                    data: item
                });
            }
            else {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }
        }))
            .catch((error) => {
            return res.status(401).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(401).json({
            message: error.message,
            error
        });
    });
});
exports.default = { login };
