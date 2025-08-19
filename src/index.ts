import express from "express"
import bodyParser from "body-parser"
import path from 'path';

import { StudentRepository } from "./repositories/studentRepository"
import { studentControler } from "./controllers/studentController"
import { studentService } from "./services/studentService"

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')));

const studentRepository  = new StudentRepository()
const StudentService = new studentService(studentRepository)
const studentController = new studentControler(StudentService)

app.post("/students",studentController.createStudent)
app.get("/students",studentController.getAllStudents)
app.get("/students/:id",studentController.getStudentById)
app.put("/students/:id",studentController.updateStudent)
app.delete("/students/:id",studentController.deleteStudent)

app.listen(port,()=>console.log(`Server running on port ${port}`))
