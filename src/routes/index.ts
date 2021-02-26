import { Router } from 'express';

import surveysRouter from './surveys.routes';
import sendMailRouter from './sendMail.routes';
import answersRouter from './answers.routes';
import npsRouter from './nps.routes';
import userRouter from './users.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/surveys', surveysRouter);
routes.use('/sendMail', sendMailRouter);
routes.use('/answers', answersRouter);
routes.use('/nps', npsRouter);

export default routes;