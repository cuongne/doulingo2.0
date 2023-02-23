import express from 'express';
import controller from '../controllers/users';
import { authorize } from '../middleware/auth';

const router = express.Router();

router.get('/get/users',authorize(), controller.getAllUsers);
router.post('/post/user',authorize(), controller.createUser);
router.put('/update/user',authorize(), controller.updateUser);
router.delete('/delete/user',authorize(), controller.deleteUser);

export = router;