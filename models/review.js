const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Review", reviewSchema);

// review.js
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   comment: String,
//   rating: Number,
//   listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
//   // Add other fields as needed
// });

// const Review = mongoose.model("Review", reviewSchema);

// module.exports = Review;
