import { Router } from 'express';
import AnswerController from './controllers/AnswerController';
import SendMailController from './controllers/SendMailController';
import SurveysController from './controllers/SurveysController';
import { UserController } from './controllers/UsersController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

const answerController = new AnswerController();

router.post('/users', userController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);


export default router;