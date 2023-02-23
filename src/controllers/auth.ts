import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { user_name, password } = req.body;
    let query = `SELECT * FROM users WHERE user_name = '${user_name}'`;
    Connect()
        .then((connection) => {
            Query(connection, query)
                .then(async (rs: any) => {
                    const validPassword = await bcrypt.compare(password, rs[0].password)
                    const item = rs[0]
                    if (validPassword) {
                        const token = jwt.sign(
                            { user_id: item.id, user_name: item?.user_name },
                            'secretTokenKey',
                            {
                                expiresIn: "2h",
                            }
                        );

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

                })
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
};

export default { login };