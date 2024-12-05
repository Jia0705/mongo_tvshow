// load the models
const Tvshow = require("../models/tvshow");

// CRUD functions
const getTvshows = async (genre, rating, premiere_year) => {
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
   filter.premiere_year = { $gt: premiere_year };
 }

 // apply filter in .find()
 const tvshows = await Tvshow.find(filter);
 return tvshows;
};

const getTvshow = async (id) => {
  const tvshow = await Tvshow.findById(id);
  return tvshow;
};

// add new show
const addNewTvshow = async (title, creator, premiere_year, end_year, seasons, genre, rating) => {
  // create new show
  const newTvshow = new Tvshow({
    title,
    creator,
    premiere_year,
    end_year,
    seasons,
    genre,
    rating,
  });
  await newTvshow.save();
  return newTvshow;
};

// update show
const updateTvshow = async (id, title, creator, premiere_year, end_year, seasons, genre, rating) => {
  const updatedTvshow = await Tvshow.findByIdAndUpdate(
    id,
    {
        title,
        creator,
        premiere_year,
        end_year,
        seasons,
        genre,
        rating,
    },
    {
      new: true, // return back the updated data
    }
  );
  return updatedTvshow;
};

// delete show
const deleteTvshow = async (id) => {
    return await Tvshow.findByIdAndDelete(id);
};

// export all the functions
module.exports = {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deleteTvshow,
};
