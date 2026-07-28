import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    {
      id: 101,
      name: 'Angular Architecture',
      code: 'CS-ANG-20',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 102,
      name: '.NET Full Stack',
      code: 'CS-DOT-50',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: false
    }
  ];

  // Task 106: Configure TestBed with HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Task 107: verify() asserts no unexpected outstanding requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Task 107: Test getCourses() HTTP GET request
  it('should GET courses from the correct API URL', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Angular Architecture');
    });

    // flush() supplies mock response to the pending HTTP request
    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Task 107: Verify correct number of courses returned
  it('should return the flushed course count from API', () => {
    let result: Course[] = [];

    service.getCourses().subscribe(courses => {
      result = courses;
    });

    httpMock.expectOne('http://localhost:3000/courses').flush(mockCourses);
    expect(result.length).toBe(2);
  });

  // Task 108: Test error handling with retry(2) and catchError fallback
  it('should retry on error and fall back to mock courses when HTTP request fails', () => {
    let result: Course[] = [];

    service.getCourses().subscribe(courses => {
      result = courses;
    });

    // Handle initial request + 2 retries (total 3 requests)
    for (let i = 0; i < 3; i++) {
      const req = httpMock.expectOne('http://localhost:3000/courses');
      req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
    }

    expect(result.length).toBeGreaterThan(0);
  });

  // Test createCourse POST
  it('should POST a new course to the API', () => {
    const newCourse: Omit<Course, 'id'> = {
      name: 'New Test Course',
      code: 'CS-NEW-99',
      credits: 2,
      gradeStatus: 'pending'
    };

    service.createCourse(newCourse).subscribe(created => {
      expect(created.name).toBe('New Test Course');
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('POST');
    req.flush({ id: 999, ...newCourse });
  });
});
