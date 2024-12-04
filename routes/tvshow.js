const express = require("express");

// create a router for tvshows
const router = express.Router();

// load the models
const Tvshow = require("../models/tvshow");

// create the routes

// the routes to get all the tvshows (pointing to /tvshows)
router.get("/", async (req, res) => {
  const genre = req.query.genre;
  const rating = req.query.rating;
  const premiere_year = req.query.premiere_year;

  // create a container for filter
  let filter = {};
  if (genre) {
    // if genre exists, pass it to the filter container
    filter.genre = genre;
  }
  if (rating) {
    // if rating exist, pass it into the filter container
    filter.rating = { $gt: rating };
  }
  if (premiere_year) {
    // if premiere_year exist, pass it into the filter container
    filter.premiere_year = { $gt: premiere_year};
  }

  // apply filter in .find()
  const tvshows = await Tvshow.find(filter);
  res.send(tvshows);
});

// get one tvshow by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const tvshow = await Tvshow.findById(id);
  res.send(tvshow);
});

module.exports = router;
