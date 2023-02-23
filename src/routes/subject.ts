import express from 'express';
import controller from '../controllers/subject';
import { authorize } from '../middleware/auth';
const router = express.Router();

router.get('/get/subjects', authorize(), controller.getAllSubject);
router.post('/post/subject', authorize(), controller.createSubject);
router.put('/update/subject', authorize(), controller.updateSubject);
router.delete('/delete/subject', authorize(), controller.deleteSubject);

export = router;