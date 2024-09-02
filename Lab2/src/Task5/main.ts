import { CourseManager } from "./course_manager";
import { OnlineCourse } from "./online_course";

const course1 = new OnlineCourse("JavaScript Basics", 40);
const course2 = new OnlineCourse("Advanced Python", 60);
const course3 = new OnlineCourse("Data Science Fundamentals", 80);

const courseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

course1.registerStudent("Alice");
course1.registerStudent("Bob");
course2.registerStudent("Charlie");
course2.registerStudent("Dave");
course3.registerStudent("Eve");

const allCourses = courseManager.getAllCourses();
allCourses.forEach(course => {
    console.log(`Course: ${course.courseName}, Duration: ${course.duration} hours`);
    console.log(`Students: ${course.students.join(", ")}`);
    console.log("-----------------------------------");
});
