import { Course } from "./course";

export class CourseManager {
    private courses: Course[];

    constructor() {
        this.courses = [];
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.courseName === courseName);
    }

    getAllCourses(): Course[] {
        return this.courses;
    }
}
