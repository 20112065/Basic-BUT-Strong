'use strict';

import logger from "../utils/logger.js";
import workoutStore from "../models/workout-store.js";
import { v4 as uuidv4 } from 'uuid';
import accounts from './account.js';


const dashboard = {
   createView(request, response) {
    logger.info("Dashboard page loading!");

    const loggedInUser = accounts.getCurrentUser(request);

    if (loggedInUser) {
      const searchTerm = request.query.searchTerm || "";

      const workouts = searchTerm
        ? workoutStore.searchUserWorkouts(searchTerm, loggedInUser.id)
        : workoutStore.getUserWorkouts(loggedInUser.id);

      const sortField = request.query.sort;
      const order = request.query.order === "desc" ? -1 : 1;

      let sorted = workouts;

      if (sortField) {
        sorted = workouts.slice().sort((a, b) => {
          if (sortField === "title") {
            return a.title.localeCompare(b.title) * order;
          }

          if (sortField === "rating") {
            return (a.rating - b.rating) * order;
          }

          return 0;
        });
      }

      const viewData = {
        title: "Workout App Dashboard",
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        workouts: sortField ? sorted : workouts,
        search: searchTerm,
        titleSelected: request.query.sort === "title",
        ratingSelected: request.query.sort === "rating",
        ascSelected: request.query.order === "asc",
        descSelected: request.query.order === "desc",
      };
      
      logger.info('about to render' + viewData.workouts);
      
      response.render('dashboard', viewData);
    }
    else response.redirect('/');

  },


  addWorkout(request, response) {
    
        const loggedInUser = accounts.getCurrentUser(request);
    logger.debug(loggedInUser.id);
    const timestamp = new Date();
    
    
     const newWorkout = {
      userid: loggedInUser.id,
      id: uuidv4(),
      title: request.body.workoutName,
      rating: parseInt(request.body.rating),
      exercises: [],
      date: timestamp
    };

    workoutStore.addWorkout(newWorkout);
    response.redirect('/dashboard');
  },

deleteWorkout(request, response) {
    const workoutId = request.params.id;
    logger.debug(`Deleting Workout ${workoutId}`);
    workoutStore.removeWorkout(workoutId);
    response.redirect("/dashboard");
},


};

export default dashboard;
