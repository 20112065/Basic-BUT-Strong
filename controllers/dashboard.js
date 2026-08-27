'use strict';

import logger from "../utils/logger.js";
import workoutStore from "../models/workout-store.js";
import { v4 as uuidv4 } from 'uuid';


const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Workout Dashboard",
      workouts: workoutStore.getAllWorkouts()
    };
    
    logger.debug(viewData.workouts);
    
    response.render('dashboard', viewData);
  },

  addWorkout(request, response) {
    const newWorkout = {
      id: uuidv4(),
      title: request.body.title,
      exercises: [],
    };
    workoutStore.addWorkout(newWorkout);
    response.redirect('/dashboard');
},

};

export default dashboard;
