


'use strict';


import logger from "../utils/logger.js";

const Workout = [
  {
    id: 1,
    title: "Upper Body",
    excercise1: "bench press",
    excercise2: "shoulder press",
    excercise3: "lat pull down",
  }
];

const collectionDetails = {
  createView(request, response) {
      logger.info("Collection Details page loading!")
    logger.debug("Loading the workout", Workout);
    response.json(Workout);   
  },
};

export default collectionDetails;
