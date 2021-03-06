import express from 'express';
import { listOneFarm, listAllFarm } from '../controller/sponsor.controller';
import Security from '../utils/security';
import authorizeUser from '../middleware/authorizeUser';

const BASE_URL = '/sponsor';
const sponsorRoute = express.Router();

// LIST A SINGLE FARM
sponsorRoute.get(`${BASE_URL}/:farmId/listOneFarm`, Security.verifyTokenMiddleWare, authorizeUser(['sponsor', 'admin', 'super_admin']), listOneFarm);

// LIST ALL FARM
sponsorRoute.get(`${BASE_URL}/listAllFarm`, Security.verifyTokenMiddleWare, authorizeUser(['sponsor', 'admin', 'super_admin']), listAllFarm);

export default sponsorRoute;
