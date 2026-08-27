'use strict';

import logger from "../utils/logger.js";
import workoutStore from "../models/workout-store.js";

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
};

export default dashboard;
