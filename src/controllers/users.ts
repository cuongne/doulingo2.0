import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';
import bcrypt from 'bcrypt'


const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    let query = 'SELECT * FROM users';

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
const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { username, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    let query = `INSERT INTO users (user_name, password) VALUES ("${username}", "${encryptedPassword}")`;
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
const updateUser = async (req: Request, res: Response, next: NextFunction) => {

    const { id, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    let query = `UPDATE users SET password="${encryptedPassword}" WHERE id = ${id};`
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
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.body
    let query = `DELETE FROM users WHERE id = ${id};`
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
export default { getAllUsers, createUser, updateUser, deleteUser };