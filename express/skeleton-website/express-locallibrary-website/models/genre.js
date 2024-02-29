const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100
    }
  }
);

// Virtual for genre's URL
GenreSchema.virtual('url').get(function () {
  // Won't use arrow function inorder to deploy the this object
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
