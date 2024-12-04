const express = require("express");

// create a router for movies
const router = express.Router();

// load the models
const Movie = require("../models/movie");

// create the routes

// the routes to get all the movies (pointing to /movies)
router.get("/", async (req, res) => {
  const Genre = req.query.Genre;
  const Rating = req.query.Rating;
  const Director = req.query.Director;

  // create a container for filter
  let filter = {};
  if (Genre) {
    // if genre exists, pass it to the filter container
    filter.Genre = Genre;
  }
  if (Rating) {
    // if rating exist, pass it into the filter container
    filter.Rating = { $gt: Rating };
  }
  if (Director) {
    // if director exist, pass it into the filter container
    filter.Director = Director;
  }

  // apply filter in .find()
  const movies = await Movie.find(filter);
  res.send(movies);
});

// get one movie by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);
  res.send(movie);
});

module.exports = router;
