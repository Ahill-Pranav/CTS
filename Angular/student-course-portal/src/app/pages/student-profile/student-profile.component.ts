import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  student = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    studentId: 'STU-2026-8942',
    major: 'Computer Science & Engineering',
    semester: '6th Semester (Spring 2026)',
    gpa: 3.82,
    completedCredits: 84
  };

  enrolledCourses: Course[] = [];

  // Task 66: Inject EnrollmentService into StudentProfileComponent
  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    // Task 66: Display enrolled courses using getEnrolledCourses()
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
