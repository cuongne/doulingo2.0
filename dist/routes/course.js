"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const course_1 = __importDefault(require("../controllers/course"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/get/courses', (0, auth_1.authorize)(), course_1.default.getAllCourse);
router.post('/post/course', (0, auth_1.authorize)(), course_1.default.createCourse);
router.put('/update/course', (0, auth_1.authorize)(), course_1.default.updateCourse);
router.delete('/delete/course', (0, auth_1.authorize)(), course_1.default.deleteCourse);
module.exports = router;
