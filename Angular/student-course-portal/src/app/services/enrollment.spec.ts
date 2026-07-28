import { TestBed } from '@angular/core/testing';
import { EnrollmentService } from './enrollment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrollmentService]
    });
    service = TestBed.inject(EnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for initially enrolled course IDs', () => {
    expect(service.isEnrolled(101)).toBeTrue();
  });

  it('should enroll a new course', () => {
    service.enroll(103);
    expect(service.isEnrolled(103)).toBeTrue();
  });

  it('should unenroll a course', () => {
    service.unenroll(101);
    expect(service.isEnrolled(101)).toBeFalse();
  });
});
