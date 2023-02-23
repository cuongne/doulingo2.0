"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const users_1 = __importDefault(require("./routes/users"));
const subject_1 = __importDefault(require("./routes/subject"));
const auth_1 = __importDefault(require("./routes/auth"));
const course_1 = __importDefault(require("./routes/course"));
const data_1 = __importDefault(require("./routes/data"));
const NAMESPACE = 'Server';
const router = (0, express_1.default)();
/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    res.on('finish', () => {
        /** Log the res */
    });
    next();
});
/** Parse the body of the request */
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
/** Routes go here */
router.use('/users', users_1.default);
router.use('/subjects', subject_1.default);
router.use('/auth', auth_1.default);
router.use('/data', data_1.default);
router.use('/course', course_1.default);
/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => console.log(`Server is running ${config_1.default.server.hostname}:${config_1.default.server.port}`));
