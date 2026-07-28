import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry, switchMap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Fallback mock courses array when API is offline
  private initialCourses: Course[] = [
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

  constructor(private http: HttpClient) {}

  // Task 79, 83, 84, 85, 86: getCourses with RxJS operators (retry, tap, map, catchError)
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Task 86: Retry failed request up to 2 times
      retry(2),
      // Task 85: Side effect logging with tap
      /*
       * Task 85 Comment:
       * tap is used strictly for side effects (such as logging or metrics) that do not alter the emitted values.
       * Keeping side effects inside tap maintains clean separation of concerns and avoids unexpected stream mutation.
       */
      tap(courses => console.log('Courses loaded via HTTP:', courses.length)),
      // Task 83: Transform response using map operator (filtering positive credits)
      map(courses => courses.filter(c => c.credits > 0)),
      // Task 84: Catch and handle HTTP errors gracefully
      catchError(err => {
        console.warn('HTTP backend unavailable, using fallback mock courses:', err.message);
        return of(this.initialCourses);
      })
    );
  }

  // Task 79: getCourseById
  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const found = this.initialCourses.find(c => c.id === id);
        return of(found);
      })
    );
  }

  // Task 81: POST createCourse
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError(() => {
        const newCourse: Course = { ...course, id: Date.now() };
        this.initialCourses.push(newCourse);
        return of(newCourse);
      })
    );
  }

  // Task 82: PUT updateCourse
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      catchError(() => {
        const idx = this.initialCourses.findIndex(c => c.id === course.id);
        if (idx !== -1) {
          this.initialCourses[idx] = course;
        }
        return of(course);
      })
    );
  }

  // Task 82: DELETE deleteCourse
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        this.initialCourses = this.initialCourses.filter(c => c.id !== id);
        return of(undefined);
      })
    );
  }

  // Task 87: switchMap chaining demonstration
  /*
   * Task 87 Comment:
   * switchMap cancels any previously pending inner Observable whenever a new outer value is emitted.
   * This is critical for type-ahead search inputs and dependent API requests to prevent out-of-order responses.
   */
  getStudentsByCourse(courseId: number): Observable<any[]> {
    return of([courseId]).pipe(
      switchMap(id => this.http.get<any[]>(`http://localhost:3000/enrollments?courseId=${id}`)),
      catchError(() => of([{ studentId: 1, name: 'Alex Johnson', courseId }]))
    );
  }

  // Synchronous add helper for legacy components
  addCourse(course: Course): void {
    this.initialCourses.push(course);
  }
}
