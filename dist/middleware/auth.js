"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jwt_1 = require("../utils/jwt");
const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return (req, res, next) => {
        try {
            const userData = (0, jwt_1.verifyToken)(req);
            if (userData) {
                next();
            }
        }
        catch (err) {
            res.status(400).json({
                message: 'User invalid. Please try again',
                err
            });
        }
    };
};
exports.authorize = authorize;
