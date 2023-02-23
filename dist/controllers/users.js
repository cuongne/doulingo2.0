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
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let query = 'SELECT * FROM users';
    (0, mysql_1.Connect)()
        .then((connection) => {
        (0, mysql_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
    let query = `INSERT INTO users (user_name, password) VALUES ("${username}", "${encryptedPassword}")`;
    (0, mysql_1.Connect)()
        .then((connection) => {
        (0, mysql_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.body;
    const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
    let query = `UPDATE users SET password="${encryptedPassword}" WHERE id = ${id};`;
    (0, mysql_1.Connect)()
        .then((connection) => {
        (0, mysql_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    let query = `DELETE FROM users WHERE id = ${id};`;
    (0, mysql_1.Connect)()
        .then((connection) => {
        (0, mysql_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
exports.default = { getAllUsers, createUser, updateUser, deleteUser };
