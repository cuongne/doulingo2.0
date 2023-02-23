import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';


const getAllData = async (req: Request, res: Response, next: NextFunction) => {

    let query = 'SELECT * FROM data_learn';

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
const createData = async (req: Request, res: Response, next: NextFunction) => {
    const { title, eng, vie, answer, type, image } = req.body;
    let query = `INSERT INTO data_learn( title, eng, vie, answer, type, image)
    VALUES ('${title}','${eng}','${vie}','${answer}','${type}','${image}')
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
const updateData = async (req: Request, res: Response, next: NextFunction) => {
    const { title, eng, vie, answer, type, image, id } = req.body;
    let query = `UPDATE data_learn SET title='${title}',eng='${eng}',vie='${vie}',answer='${answer}',type='${type}',image='${image}' WHERE id = ${id};`;

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
const deleteData = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    let query = `DELETE FROM data_learn WHERE id = ${id};`

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
export default { getAllData, createData, updateData, deleteData };