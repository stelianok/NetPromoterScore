import { Router } from 'express';
import NpsController from '../controllers/NpsController';

const npsController = new NpsController();
const npsRouter = Router();

npsRouter.get('/:survey_id', npsController.execute);

export default npsRouter;