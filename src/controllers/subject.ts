import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';


const getAllSubject = async (req: Request, res: Response, next: NextFunction) => {

    let query = 'SELECT * FROM subject';

    Connect()
        .then((connection) => {
            Query(connection, query)
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
};
const createSubject = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    let query = `INSERT INTO subject(name)
    VALUES ('${name}')
    `;

    Connect()
        .then((connection) => {
            Query(connection, query)
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
};
const updateSubject = async (req: Request, res: Response, next: NextFunction) => {
    const { name, subject_id } = req.body;
    let query = `UPDATE subject SET name='${name}' WHERE subject_id = ${subject_id};`;

    Connect()
        .then((connection) => {
            Query(connection, query)
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
};
const deleteSubject = async (req: Request, res: Response, next: NextFunction) => {
    const { subject_id } = req.body;
    let query = `DELETE FROM subject WHERE subject_id = ${subject_id};`

    Connect()
        .then((connection) => {
            Query(connection, query)
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
};
export default { getAllSubject, createSubject, updateSubject, deleteSubject };