const express = require("express");

// create a router for tvshows
const router = express.Router();

// import functions from controller
const {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deleteTvshow,
} = require("../controllers/tvshow");

// the routes to get all the tvshows (pointing to /tvshows)
router.get("/", async (req, res) => {
  try {
  const genre = req.query.genre;
  const rating = req.query.rating;
  const premiere_year = req.query.premiere_year;
  const tvshows = await getTvshows(genre, rating, premiere_year);
  res.status(200).send(tvshows);
} catch (error) {
  res.status(400).send({
    error: error._message,
  });
}
});

// get one show
router.get("/:id", async (req, res) => {
  try {
  const id = req.params.id;
  const tvshow = await getTvshow(id);
  res.status(200).send(tvshow);
  } catch (error) {
    res.status(404).send({
      error: error._message,
    });
  }
});

// add show
router.post("/", async (req, res) => {
  try {
    // retrieve the data from req.body
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;

    // check for error
    if (!title || !creator || !premiere_year || !seasons || !genre || !rating) {
      return res.status(400).send({
        error: "Required data is missing",
      });
    }

    // pass in all the data
    const newTvshow = await addNewTvshow(
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(newTvshow);
  } catch (error) {
    // if there is an error, return the error code
    res.status(400).send({
      error: error._message,
    });
  }
});

// update show
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;
    // pass in the data 
    const updatedTvshow = await updateTvshow(
      id,
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating,
    );
    res.status(200).send(updatedTvshow);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// delete show
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteTvshow(id);
    res.status(200).send({
      message: `Show with the provided id #${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

module.exports = router;
