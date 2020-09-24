const mongoose = require('mongoose');


const resultSchema = new mongoose.Schema({
    
  Name:  String, // String is shorthand for {type: String}
  Father: String,
  Mobile:   String,
  Job:  String, // String is shorthand for {type: String}
  CNIC: String,
  Email: String,
  Status: String, // String is shorthand for {type: String}
  RollNo:  String,
  TotalMarks: String,
  ObtainedMarks: String,
  Sr: Object,

});

const Result = mongoose.model('Results', resultSchema);
module.exports = Result;