// schema for movies collection
const { Schema, model } = require("mongoose");

// Setup the schema
const movieSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Director: {
    type: String,
    required: true,
  },
  ReleaseYear: {
    type: Number,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
});

// convert the schema to model
const Movie = model("Movie", movieSchema);

module.exports = Movie; // equal to "export default Movie" in React
