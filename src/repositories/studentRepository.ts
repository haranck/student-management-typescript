import { Student } from "../models/studentmodel";

export class StudentRepository {
    private students: Student[] = []
    private nextId = 1

    addStudent(student: Omit<Student, "id">): Student {
        const newStudent = new Student(this.nextId++, student.name, student.age, student.course)
        this.students.push(newStudent)
        return newStudent
    }
    getAllStudents(): Student[] {
        return this.students
    }
    getStudentById(id: number): Student | undefined {
        return this.students.find((student) => student.id === id)
    }
    updateStudent(id: number, updateData: Partial<Omit<Student, "id">>): Student | null {
        const student = this.students.find((student) => student.id === id)
        if (!student) { return null }

        if (updateData.name !== undefined) {
            student.name = updateData.name
        }
        if (updateData.age !== undefined) {
            student.age = updateData.age
        }
        if (updateData.course !== undefined) {
            student.course = updateData.course
        }
        return student
    }
    deleteStudent(id: number): boolean {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return false;
        this.students.splice(index, 1);
        return true;
    }

}


