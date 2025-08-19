"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentControler = void 0;
class studentControler {
    constructor(Studentservice) {
        this.Studentservice = Studentservice;
        this.createStudent = (req, res) => {
            try {
                const student = this.Studentservice.createStudent(req.body);
                console.log(student);
                res.status(200).json(student);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
        this.getAllStudents = (req, res) => {
            try {
                const students = this.Studentservice.getAllStudents();
                res.status(200).json(students);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
        this.getStudentById = (req, res) => {
            try {
                const id = parseInt(req.params.id);
                const students = this.Studentservice.getStudentByid(id);
                res.status(200).json(students);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
        this.updateStudent = (req, res) => {
            try {
                const id = parseInt(req.params.id);
                const updatedStudent = this.Studentservice.updateStudent(id, req.body);
                res.status(200).json(updatedStudent);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
        this.deleteStudent = (req, res) => {
            try {
                const id = parseInt(req.params.id);
                const deleted = this.Studentservice.deleteStudent(id);
                if (!deleted) {
                    res.status(404).json({ message: "Student Not Found" });
                    return;
                }
                res.status(200).json({ message: "Student deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
    }
}
exports.studentControler = studentControler;
