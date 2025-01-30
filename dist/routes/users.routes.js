import express from 'express';
import { getUserInfo } from '../controllers/users.controller.js';
const userRoutes = express.Router();
userRoutes.get('/', getUserInfo);
export default userRoutes;
