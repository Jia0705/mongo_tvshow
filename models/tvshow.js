// schema for tvshow collection
const {Schema, model} = require("mongoose");

// Setup the schema
const tvshowSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    premiere_year: {
      type: Number,
      required: true,
    },
    end_year: Number,
    seasons: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  });

// convert the schema to model
const Tvshow = model("Tvshow", tvshowSchema);

module.exports = Tvshow; 