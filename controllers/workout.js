'use strict';

import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import workoutStore from '../models/workout-store.js';

const workout = {
  createView(request, response) {
     const workoutId = request.params.id;
    logger.debug(`Workout id = ${workoutId}`);

        const viewData = {
      title: 'Workout',
          singleWorkout: workoutStore.getWorkout(workoutId)
    
    };
    response.render('workout', viewData);
  },

    addExercise(request, response) {
    const workoutId = request.params.id;
    const workout = workoutStore.getWorkout(workoutId);
    const newExercise = {
      id: uuidv4(),
      title: request.body.title,
      exercise: request.body.exercise,
    };
    workoutStore.addExercise(workoutId, newExercise);
    response.redirect('/workout/' + workoutId);
},

};

export default workout;
