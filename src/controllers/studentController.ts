import { Request, Response } from "express";
import { studentService } from "../services/studentService";

export class studentControler {
    constructor(private Studentservice: studentService) { }

    createStudent = (req: Request, res: Response): void => {
        try {
            const student = this.Studentservice.createStudent(req.body)
            console.log(student)
            res.status(200).json(student)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }

    getAllStudents = (req: Request, res: Response): void => {
        try {
            const students = this.Studentservice.getAllStudents()
            res.status(200).json(students)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
    
    getStudentById = (req: Request, res: Response): void => {
        try {
            const id = parseInt(req.params.id)
            const students = this.Studentservice.getStudentByid(id)
            res.status(200).json(students)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
    
    updateStudent = (req: Request, res: Response): void => {
        try {
            const id = parseInt(req.params.id)
            const updatedStudent = this.Studentservice.updateStudent(id, req.body)
            res.status(200).json(updatedStudent)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
    
    deleteStudent = (req: Request, res: Response): void => {
        try {
            const id = parseInt(req.params.id)
            const deleted = this.Studentservice.deleteStudent(id)
            if (!deleted) {
                res.status(404).json({ message: "Student Not Found" })
                return
            }
            res.status(200).json({ message: "Student deleted successfully" })
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
}   