// schema for movies collection
const {Schema, model} = require("mongoose");

// Setup the schema
const movieSchema = new Schema({
    Title: String,
    Director: String,
    ReleaseYear: Number,
    Genre: String,
    Rating: Number,
})

// convert the schema to model
const Movie = model("Movie", movieSchema);

module.exports = Movie; // equal to "export default Movie" in React