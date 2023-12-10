const StudentsModel = require("./models/StudentsModel");

const createStudent = async (FirstName, LastName, MiddleName, RegNo, Year) => {
  console.log("Runnng Successfully! ");
  let Student = new StudentsModel();
  Student.FirstName = FirstName;
  Student.LastName = LastName;
  Student.MiddleName = MiddleName;
  Student.RegNo = RegNo;
  Student.Year = Year;
  await Student.save();
  return Student;
};

const getAllStudents = async () => {
  let Student = await StudentsModel.find();
  return Student;
};

const getOneStudent = async (_id) => {
  let oneStudent = await StudentsModel.findById(_id);
  return oneStudent;
};

const deleteStudent = async (_id) => {
  let Student = await StudentsModel.findByIdAndDelete(_id);
  console.log("Deleted Successfully");
  return Student;
};

const updateStudent = async (
  _id,
  FirstName,
  LastName,
  MiddleName,
  RegNo,
  Year
) => {
  let Student = await StudentsModel.findById(_id);
  Student.FirstName = FirstName;
  Student.LastName = LastName;
  Student.MiddleName = MiddleName;
  Student.RegNo = RegNo;
  Student.Year = Year;
  await Student.save();
  return Student;
};

module.exports.createStudent = createStudent;
module.exports.getAllStudents = getAllStudents;
module.exports.getOneStudent = getOneStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.updateStudent = updateStudent;
