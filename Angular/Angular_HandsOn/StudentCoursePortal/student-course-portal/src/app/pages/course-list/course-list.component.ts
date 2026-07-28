import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, Course } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  // Task 25: Loading state boolean property
  isLoading: boolean = true;

  // Task 23: Selected course tracking property
  selectedCourseId: number | null = null;

  // Task 22: Array with 5 course objects
  courses: Course[] = [
    {
      id: 101,
      name: 'Angular Architecture & Deep Skilling',
      code: 'CS-ANG-20',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true,
      description: 'Master Angular v20 standalone components, routing, NgRx state management, and Jasmine/Karma testing.'
    },
    {
      id: 102,
      name: '.NET Full Stack Engineering',
      code: 'CS-DOT-50',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: true,
      description: 'Build enterprise Web APIs using C#, EF Core, CQRS patterns, and SQL Database design.'
    },
    {
      id: 103,
      name: 'Cloud Native Microservices',
      code: 'CS-CLD-30',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false,
      description: 'Design and deploy scalable containerized services with Docker, Kubernetes, and API Gateways.'
    },
    {
      id: 104,
      name: 'Data Structures & Algorithmic Thinking',
      code: 'CS-DSA-10',
      credits: 2,
      gradeStatus: 'passed',
      enrolled: true,
      description: 'Comprehensive study of essential graphs, trees, dynamic programming, and space-time optimization.'
    },
    {
      id: 105,
      name: 'DevOps Pipelines & CI/CD Security',
      code: 'CS-DEV-40',
      credits: 1,
      gradeStatus: 'failed',
      enrolled: false,
      description: 'Automated build, test, and release workflows using GitHub Actions, SonarQube, and Terraform.'
    }
  ];

  // Task 25: Simulated async data load using setTimeout
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // Task 23: Parent event handler for enroll emission
  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;

    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      course.enrolled = true;
    }
  }

  // Task 26: trackBy function for performance optimization
  /*
   * Task 26 Comment:
   * trackBy tells Angular how to uniquely identify items in an *ngFor list (by course.id).
   * Without trackBy, Angular re-creates and re-renders ALL DOM nodes in the list whenever any array element changes.
   * With trackBy, Angular re-renders ONLY the specific DOM nodes that have changed, drastically improving performance for large lists.
   */
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  clearCourses(): void {
    this.courses = [];
  }
}
