import express from 'express';
import { createUser } from './createUser.js';
import { getUsers } from './getUsers.js';

const userRoutes = express.Router();

userRoutes.post('/register', createUser);
userRoutes.get('/get-users', getUsers);
export default userRoutes;
