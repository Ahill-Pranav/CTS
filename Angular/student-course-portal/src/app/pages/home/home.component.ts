import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CourseSummaryWidgetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName: string = 'Student Course Portal';
  isPortalActive: boolean = true;
  message: string = '';
  searchTerm: string = '';

  // Task 61: Live course count from shared CourseService singleton
  coursesCount: number = 0;
  enrolledCount: number = 3;
  gpa: number = 3.8;

  constructor(private courseService: CourseService) {}

  /* Task 16 & 61: ngOnInit - fetch courses from shared singleton CourseService */
  ngOnInit(): void {
    console.log('HomeComponent initialised - courses loaded');
    this.courseService.getCourses().subscribe(courses => {
      this.coursesCount = courses.length;
    });
  }

  /* Task 17: ngOnDestroy - cleanup logging */
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
