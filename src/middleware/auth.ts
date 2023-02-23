import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData:any = verifyToken(req);
            if (userData){
                next();
            }
        } catch (err:any) {
            res.status(400).json({
                message: 'User invalid. Please try again',
                err
            });
        }
    }

}

export {
    authorize
}