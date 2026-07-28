import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  isEnrolled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Task 69: Read route parameter :id using ActivatedRoute snapshot
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const courseId = Number(idParam);
      this.courseService.getCourseById(courseId).subscribe(course => {
        this.course = course;
        if (course) {
          this.isEnrolled = this.enrollmentService.isEnrolled(course.id);
        }
      });
    }
  }

  toggleEnrollment(): void {
    if (this.course) {
      if (this.isEnrolled) {
        this.enrollmentService.unenroll(this.course.id);
        this.isEnrolled = false;
      } else {
        this.enrollmentService.enroll(this.course.id);
        this.isEnrolled = true;
      }
    }
  }
}
