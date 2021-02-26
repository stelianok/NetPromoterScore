import { Router } from 'express';
import AnswerController from '../controllers/AnswerController';

const answersController = new AnswerController();

const answersRouter = Router();

answersRouter.get('/:value', answersController.execute);

export default answersRouter;