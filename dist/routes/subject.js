"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const subject_1 = __importDefault(require("../controllers/subject"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/get/subjects', (0, auth_1.authorize)(), subject_1.default.getAllSubject);
router.post('/post/subject', (0, auth_1.authorize)(), subject_1.default.createSubject);
router.put('/update/subject', (0, auth_1.authorize)(), subject_1.default.updateSubject);
router.delete('/delete/subject', (0, auth_1.authorize)(), subject_1.default.deleteSubject);
module.exports = router;
