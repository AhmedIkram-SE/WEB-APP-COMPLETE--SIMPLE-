const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  MiddleName: String,
  RegNo: {
    type: String,
    unique: true,
  },
  Year: {
    type: String,
    uppercase: true,
  },
});
const StudentsModel = mongoose.model("student_infos", studentsSchema);

module.exports = StudentsModel;
