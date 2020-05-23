/* eslint-disable no-tabs */
import express from 'express';
import passport from 'passport';
import socialController from '../controller/google.auth.controller';
import {
  createUser, logInUser, getASpecificUser
} from '../controller/auth.controller';
import { validateInput } from '../middleware/schemaValidation';
import { authenticationSchema, loginSchema } from '../middleware/authentication';
import { emailPhoneValidator } from '../middleware/validation/index';
import Security from '../utils/security';

const authRoute = express.Router();
const BASE_URL = '/auth';
authRoute.post(`${BASE_URL}/createUser`, validateInput(authenticationSchema), emailPhoneValidator, createUser);
authRoute.post(`${BASE_URL}/signIn`, validateInput(loginSchema), logInUser);
authRoute.get(`${BASE_URL}/user`, Security.verifyTokenMiddleWare, getASpecificUser);

authRoute.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));
authRoute.get('/auth/google/callback', passport.authenticate('google', { session: false }), socialController);

export default authRoute;
