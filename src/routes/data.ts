import express from 'express';
import controller from '../controllers/data';
import { authorize } from '../middleware/auth';
const router = express.Router();

router.get('/get/data', authorize(), controller.getAllData);
router.post('/post/data', authorize(), controller.createData);
router.put('/update/data', authorize(), controller.updateData);
router.delete('/delete/data', authorize(), controller.deleteData);

export = router;