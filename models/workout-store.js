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

addExercise(id, exercise) {
    this.store.addItem(this.collection, id, this.array, exercise);
},

addWorkout(workout) {
    this.store.addCollection(this.collection, workout);
},



};

export default WorkoutStore;
