'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const WorkoutStore = {

  store: new JsonStore('./models/workout-store.json', { workoutCollection: [] }),
  collection: 'workoutCollection',
  array: 'exercises',

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

removeExercise(id, exerciseId) {
    this.store.removeItem(this.collection, id, this.array, exerciseId);
},

removeWorkout(id) {
    const workout = this.getWorkout(id);
    this.store.removeCollection(this.collection, workout);
},

getUserWorkouts(userid) {
  return this.store.findBy(this.collection, (workout => workout.userid === userid));
},

searchUserWorkouts(search, userid) {
  return this.store.findBy(
    this.collection,
    (workout => workout.userid === userid && workout.title.toLowerCase().includes(search.toLowerCase())))
}, 

searchWorkout(search) {
    return this.store.findBy(
      this.collection,
      (workout => workout.title.toLowerCase().includes(search.toLowerCase())))
},



};

export default WorkoutStore;
