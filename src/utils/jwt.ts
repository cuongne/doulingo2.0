import jwt from 'jsonwebtoken';
export const decodeToken = (token: string) => {
    return jwt.verify(token, 'secretTokenKey', (err, dec) => {
        if (err) {
            throw err;
        }
        return dec;
    })
}
export const verifyToken = (request: any) => {
    const token = extractTokenFromRequest(request);
    if (!token) {
        throw new Error("Token is empty")
    }
    try {
        const decodedToken = decodeToken(token);
        return decodedToken;
    }
    catch (err:any) {
        throw new Error(err);
    }
}
function extractTokenFromRequest(request:any) {
    if (request.headers.authorization && request.headers.authorization.split(" ")[0] === "Bearer") {
        return request.headers.authorization.split(" ")[1];
    }
    return null;
}
