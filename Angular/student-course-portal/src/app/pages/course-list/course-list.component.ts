import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent, Course } from '../../components/course-card/course-card.component';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../../components/notification/notification.component';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, CourseSummaryWidgetComponent, NotificationComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  // Task 96: Observable for courses from NgRx store
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;

  selectedCourseId: number | null = null;
  searchQuery: string | null = null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
  }

  ngOnInit(): void {
    // Task 96: Dispatch loadCourses NgRx action
    this.store.dispatch(loadCourses());

    // Task 71: Read query parameter search
    this.searchQuery = this.route.snapshot.queryParamMap.get('search');
    if (this.searchQuery) {
      console.log('CourseListComponent loaded with queryParam search:', this.searchQuery);
    }
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // Task 70: Card click navigates to /courses/:id
  navigateToDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  // Task 71: Update query parameter in URL
  updateSearchQuery(term: string): void {
    this.router.navigate(['courses'], {
      queryParams: { search: term }
    });
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
