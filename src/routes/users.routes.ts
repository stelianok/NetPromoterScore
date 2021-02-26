import { Router } from 'express';
import { UserController } from '../controllers/UsersController';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', userController.create);

export default userRouter;