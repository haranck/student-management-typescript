"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
class studentService {
    constructor(studentRepo) {
        this.studentRepo = studentRepo;
    }
    createStudent(data) {
        if (!data.name || !data.age || !data.course) {
            throw new Error("Invalid student data");
        }
        return this.studentRepo.addStudent(data);
    }
    getAllStudents() {
        return this.studentRepo.getAllStudents();
    }
    getStudentByid(id) {
        const student = this.studentRepo.getStudentById(id);
        if (!student) {
            throw new Error("student not found ");
        }
        return student;
    }
    updateStudent(id, updateData) {
        const updatedStudent = this.studentRepo.updateStudent(id, updateData);
        if (!updatedStudent) {
            throw new Error("student not found");
        }
        return updatedStudent;
    }
    deleteStudent(id) {
        const deleted = this.studentRepo.deleteStudent(id);
        if (!deleted) {
            throw new Error("Student Not Found");
        }
        return deleted;
    }
}
exports.studentService = studentService;
