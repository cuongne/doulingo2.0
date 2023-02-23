"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("../controllers/data"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/get/data', (0, auth_1.authorize)(), data_1.default.getAllData);
router.post('/post/data', (0, auth_1.authorize)(), data_1.default.createData);
router.put('/update/data', (0, auth_1.authorize)(), data_1.default.updateData);
router.delete('/delete/data', (0, auth_1.authorize)(), data_1.default.deleteData);
module.exports = router;
