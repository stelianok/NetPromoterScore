import { Router } from 'express';
import SurveysController from '../controllers/SurveysController';

const surveysController = new SurveysController();

const surveysRouter = Router();

surveysRouter.get('/', surveysController.show);
surveysRouter.post('/', surveysController.create);

export default surveysRouter;