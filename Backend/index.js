const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {
  createStudent,
  getAllStudents,
  getOneStudent,
  deleteStudent,
  updateStudent,
} = require("./StudentsOperations");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or specify a specific origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

let database = mongoose.connect(
  "mongodb+srv://ahmedikram2003:12e51055@cluster0.pczboo8.mongodb.net/University?retryWrites=true&w=majority"
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/students", function (req, res) {
  database.then(async () => {
    let students = await getAllStudents();
    res.send(students);
  });
});

app.get("/api/students/:index", function (req, res) {
  database.then(async () => {
    if (!getOneStudent) {
      res.status(400).send("Student Not Found");
    }
    let oneStudent = await getOneStudent(req.params.index);
    res.send(oneStudent);
  });
});

app.put("/api/students/:index", function (req, res) {
  database.then(async () => {
    //console.log(req.body);
    let upStudent = await updateStudent(
      req.params.index,
      req.body.FirstName,
      req.body.LastName,
      req.body.MiddleName,
      req.body.RegNo,
      req.body.Year
    );
    res.send(upStudent);
  });
});

app.delete("/api/students/:index", function (req, res) {
  database.then(async () => {
    let delStudent = await deleteStudent(req.params.index);
    res.send(delStudent);
  });
});

app.post("/api/students", function (req, res) {
  database.then(async () => {
    let newStudent = await createStudent(
      req.body.FirstName,
      req.body.LastName,
      req.body.MiddleName,
      req.body.RegNo,
      req.body.Year
    );
    res.send(newStudent);
  });
});

database.catch((err) => {
  console.log("Error Connecitng " + err);
});

app.listen(3030);
