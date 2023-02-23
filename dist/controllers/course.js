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
const getAllCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let query = 'SELECT * FROM Course';
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
const createCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, image } = req.body;
    let query = `INSERT INTO course(name,description,image)
    VALUES ('${name}','${description}','${image}')
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
const updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, image, course_id } = req.body;
    let query = `UPDATE Course SET name='${name}',description='${description}',image='${image}' WHERE Course_id = ${course_id};`;
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
const deleteCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { course_id } = req.body;
    let query = `DELETE FROM Course WHERE course_id = ${course_id};`;
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
exports.default = { getAllCourse, createCourse, updateCourse, deleteCourse };
