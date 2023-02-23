import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';


const getAllCourse = async (req: Request, res: Response, next: NextFunction) => {

    let query = 'SELECT * FROM Course';

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
const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, image } = req.body;
    let query = `INSERT INTO course(name,description,image)
    VALUES ('${name}','${description}','${image}')
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
const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, image, course_id } = req.body;
    let query = `UPDATE Course SET name='${name}',description='${description}',image='${image}' WHERE Course_id = ${course_id};`;

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
const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { course_id } = req.body;
    let query = `DELETE FROM Course WHERE course_id = ${course_id};`

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
export default { getAllCourse, createCourse, updateCourse, deleteCourse };