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
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../config/mysql");
const getAllData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let query = 'SELECT * FROM data_learn';
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
const createData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, eng, vie, answer, type, image } = req.body;
    let query = `INSERT INTO data_learn( title, eng, vie, answer, type, image)
    VALUES ('${title}','${eng}','${vie}','${answer}','${type}','${image}')
    `;
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
const updateData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, eng, vie, answer, type, image, id } = req.body;
    let query = `UPDATE data_learn SET title='${title}',eng='${eng}',vie='${vie}',answer='${answer}',type='${type}',image='${image}' WHERE id = ${id};`;
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
const deleteData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    let query = `DELETE FROM data_learn WHERE id = ${id};`;
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
exports.default = { getAllData, createData, updateData, deleteData };
