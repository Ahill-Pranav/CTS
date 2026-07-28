import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  student = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    studentId: 'STU-2026-8942',
    major: 'Computer Science & Engineering',
    semester: '6th Semester (Spring 2026)',
    gpa: 3.82,
    enrolledCoursesCount: 3,
    completedCredits: 84
  };
}
