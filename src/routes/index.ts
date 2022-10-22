import { Router } from 'express';
import PostRouter from './PostRouter';

const router: Router = Router();

router.use('/', PostRouter);

export default router;
