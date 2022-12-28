import express from 'express';
import useRoute from '../routes/user.route.js';


const router = express.Router()

router.use('/user', useRoute);
export default router;