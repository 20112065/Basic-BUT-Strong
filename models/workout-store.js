'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const WorkoutStore = {

  store: new JsonStore('./models/workout-store.json', { workoutCollection: [] }),
  collection: 'workoutCollection',
  array: 'Workouts',

  getAllWorkouts() {
    return this.store.findAll(this.collection);
  },

  getWorkout(id) {
    return this.store.findOneBy(this.collection, (workout => workout.id === id));
},


};

export default WorkoutStore;
