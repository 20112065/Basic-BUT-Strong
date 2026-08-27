'use strict';

import logger from "./utils/logger.js";

import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import collectionDetails from './controllers/collectionDetails.js';
import about from './controllers/about.js';
import workout from './controllers/workout.js';


router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/collectionDetails', collectionDetails.createView);
router.get('/about', about.createView);
router.get('/workout/:id', workout.createView);

router.post('/workout/:id/addexercise', workout.addExercise);
router.post('/dashboard/addworkout', dashboard.addWorkout);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
