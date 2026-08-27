'use strict';

import logger from '../utils/logger.js';
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
};

export default workout;
