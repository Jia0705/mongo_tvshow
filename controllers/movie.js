// load the models
const Movie = require("../models/movie");

// CRUD functions
// get all movies
const getMovies = async (Genre, Rating, Director) => {
  // create a container for filter
  let filter = {};
  // if genre exists, pass it to the filter container
  if (Genre) {
    filter.Genre = Genre;
  }
  // if rating exist, pass it into the filter container
  if (Rating) {
    filter.Rating = { $gt: Rating };
  }
  // if director exist, pass into the filter container
  if (Director) {
    filter.Director = Director;
  }

  // apply filter in .find()
  const movies = await Movie.find(filter);
  return movies;
};

// get one movie
const getMovie = async (id) => {
  const movie = await Movie.findById(id);
  return movie;
};

// add new movie
const addNewMovie = async (Title, Director, ReleaseYear, Genre, Rating) => {
  // create new movie
  const newMovie = new Movie({
    Title: Title,
    Director: Director, // long method
    ReleaseYear, // short hand
    Genre,
    Rating,
  });
  // save the new movie into mongodb
  await newMovie.save();
  return newMovie;
};

// update movie
const updateMovie = async (id, Title, Director, ReleaseYear, Genre, Rating) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    {
      Title,
      Director,
      ReleaseYear,
      Genre,
      Rating,
    },
    {
      new: true, // return back the updated data
    }
  );
  return updatedMovie;
};

// delete movie
const deleteMovie = async (id) => {
    return await Movie.findByIdAndDelete(id);
};

// export all the functions
module.exports = {
  getMovies,
  getMovie,
  addNewMovie,
  updateMovie,
  deleteMovie,
};
