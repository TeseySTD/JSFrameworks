import { Course } from "./course";

export class OnlineCourse implements Course {
    courseName: string;
    duration: number;
    students: string[];

    constructor(courseName: string, duration: number) {
        this.courseName = courseName;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}
