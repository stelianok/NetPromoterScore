import { Router } from 'express';
import SendMailController from './controllers/SendMailController';
import SurveysController from './controllers/SurveysController';
import { UserController } from './controllers/UsersController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post('/users', userController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

router.post('/sendMail', sendMailController.execute);

export default router;