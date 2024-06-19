const mongoose = require("mongoose");// Imports the Mongoose library for interacting with MongoDB

const courseSchema = new mongoose.Schema({
  title: { // Defines the "title" field of the schema
    type: String,  // Specifies that the title should be a string
    required: true, // Makes the title field mandatory (cannot be empty)
  },
  price:{
    type:Number,
    required:true
  } // Defines the "price" field of the schema as a number
});

module.exports = mongoose.model("Course", courseSchema); // Exports the model named "Course" based on the courseSchema
