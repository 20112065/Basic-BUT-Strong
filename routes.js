'use strict';

import logger from "./utils/logger.js";

import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import workout from './controllers/workout.js';
import accounts from './controllers/account.js';
import stats from './controllers/stats.js';



router.get('/start', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/workout/:id', workout.createView);
router.get('/workout/:id/deleteexercise/:exerciseid', workout.deleteExercise);
router.get('/dashboard/deleteworkout/:id', dashboard.deleteWorkout);
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.get('/searchCategory', dashboard.createView);
router.get('/sortData', dashboard.createView);
router.get('/stats', stats.createView);



router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.post('/workout/:id/addexercise', workout.addExercise);
router.post('/dashboard/addworkout', dashboard.addWorkout);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
