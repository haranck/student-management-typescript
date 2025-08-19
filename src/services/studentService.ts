import { StudentRepository } from '../repositories/studentRepository'
import { Student } from '../models/studentmodel'

export class studentService {
    constructor(private studentRepo: StudentRepository) {}

    createStudent(data: Omit<Student, "id">): Student {
        if (!data.name || !data.age || !data.course) {
            throw new Error("Invalid student data")
        }
        return this.studentRepo.addStudent(data)
    }

    getAllStudents(): Student[] {
        return this.studentRepo.getAllStudents()
    }
    getStudentByid(id: number): Student | undefined {
        const student = this.studentRepo.getStudentById(id)
        if (!student) {
            throw new Error("student not found ")
        }
        return student
    }
    updateStudent(id: number, updateData: Partial<Omit<Student, "id">>): Student | null {
        const updatedStudent = this.studentRepo.updateStudent(id, updateData)
        if (!updatedStudent) {
            throw new Error("student not found")
        }
        return updatedStudent
    }
    deleteStudent(id: number): boolean {
        const deleted = this.studentRepo.deleteStudent(id)
        if (!deleted) {
            throw new Error("Student Not Found")
        }
        return deleted
    }
}
