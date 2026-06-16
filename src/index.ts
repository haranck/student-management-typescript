import express from "express"
import bodyParser from "body-parser"
import path from 'path';

import { StudentRepository, IStudentRepository } from "./repositories/studentRepository"
import { studentControler, IStudentController } from "./controllers/studentController"
import { studentService, IStudentService } from "./services/studentService"

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')));

const studentRepository: IStudentRepository  = new StudentRepository()
const StudentService: IStudentService = new studentService(studentRepository)
const studentController: IStudentController = new studentControler(StudentService)

app.post("/students",studentController.createStudent)
app.get("/students",studentController.getAllStudents)
app.get("/students/:id",studentController.getStudentById)
app.put("/students/:id",studentController.updateStudent)
app.delete("/students/:id",studentController.deleteStudent)

app.listen(port,()=>console.log(`Server running on port ${port}`))
