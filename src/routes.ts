import { Router } from 'express';
import SurveysController from './controllers/SurveysController';
import { UserController } from './controllers/UsersController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post('/users', userController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

export default router;