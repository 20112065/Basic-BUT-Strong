'use strict';

import logger from "../utils/logger.js";
import workoutStore from "../models/workout-store.js";

const collectionDetails = {
  createView(request, response) {
    logger.info("Collection Details page loading!");

    const viewData = {
      title: "Collection Details",
      workouts: workoutStore.getAllWorkouts(),
    };

    response.render("collectionDetails", viewData);
  },
};

export default collectionDetails;