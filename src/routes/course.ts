import express from 'express';
import controller from '../controllers/course';
import { authorize } from '../middleware/auth';
const router = express.Router();

router.get('/get/courses', authorize(), controller.getAllCourse);
router.post('/post/course', authorize(), controller.createCourse);
router.put('/update/course', authorize(), controller.updateCourse);
router.delete('/delete/course', authorize(), controller.deleteCourse);

export = router;