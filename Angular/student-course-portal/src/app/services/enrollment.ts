import { Injectable } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // Task 63: Store enrolled course IDs
  private enrolledCourseIds: number[] = [101, 102, 104];

  // Task 64: Service-to-Service injection (CourseService injected into EnrollmentService)
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Resolves enrolled course IDs to full Course objects using CourseService
  getEnrolledCourses(): Course[] {
    let allCourses: Course[] = [];
    this.courseService.getCourses().subscribe(courses => {
      allCourses = courses;
    });

    return allCourses.filter(c => this.enrolledCourseIds.includes(c.id));
  }

  getEnrolledIds(): number[] {
    return [...this.enrolledCourseIds];
  }
}
