"use strict";
import logger from "../utils/logger.js";
import workoutStore from "../models/workout-store.js";

const stats = {
  createView(request, response) {
    logger.info("Statistics page loading!");
    // app statistics calculations
    const workouts = workoutStore.getAllWorkouts();

    let numWorkouts = workouts.length;
    
    let numExercises = workouts.reduce((total, workout) => total + workout.exercises.length, 0);
	
	  let average = numWorkouts > 0 ? (numExercises / numWorkouts).toFixed(2) : 0;


    const statistics = {
      displayNumWorkouts: numWorkouts,
      displayNumExercises: numExercises,
	    displayAverage: average
    }

    const viewData = {
      title: "Workout App Statistics",
      stats: statistics
    };
  
    response.render("stats", viewData);
  },
};

export default stats;
