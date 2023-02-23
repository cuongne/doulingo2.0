"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.decodeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const decodeToken = (token) => {
    return jsonwebtoken_1.default.verify(token, 'secretTokenKey', (err, dec) => {
        if (err) {
            throw err;
        }
        return dec;
    });
};
exports.decodeToken = decodeToken;
const verifyToken = (request) => {
    const token = extractTokenFromRequest(request);
    if (!token) {
        throw new Error("Token is empty");
    }
    try {
        const decodedToken = (0, exports.decodeToken)(token);
        return decodedToken;
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.verifyToken = verifyToken;
function extractTokenFromRequest(request) {
    if (request.headers.authorization && request.headers.authorization.split(" ")[0] === "Bearer") {
        return request.headers.authorization.split(" ")[1];
    }
    return null;
}
