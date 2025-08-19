"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const studentmodel_1 = require("../models/studentmodel");
class StudentRepository {
    constructor() {
        this.students = [];
        this.nextId = 1;
    }
    addStudent(student) {
        const newStudent = new studentmodel_1.Student(this.nextId++, student.name, student.age, student.course);
        this.students.push(newStudent);
        return newStudent;
    }
    getAllStudents() {
        return this.students;
    }
    getStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    updateStudent(id, updateData) {
        const student = this.students.find((student) => student.id === id);
        if (!student) {
            return null;
        }
        if (updateData.name !== undefined) {
            student.name = updateData.name;
        }
        if (updateData.age !== undefined) {
            student.age = updateData.age;
        }
        if (updateData.course !== undefined) {
            student.course = updateData.course;
        }
        return student;
    }
    deleteStudent(id) {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1)
            return false;
        this.students.splice(index, 1);
        return true;
    }
}
exports.StudentRepository = StudentRepository;
