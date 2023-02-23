"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/get/users', (0, auth_1.authorize)(), users_1.default.getAllUsers);
router.post('/post/user', (0, auth_1.authorize)(), users_1.default.createUser);
router.put('/update/user', (0, auth_1.authorize)(), users_1.default.updateUser);
router.delete('/delete/user', (0, auth_1.authorize)(), users_1.default.deleteUser);
module.exports = router;
