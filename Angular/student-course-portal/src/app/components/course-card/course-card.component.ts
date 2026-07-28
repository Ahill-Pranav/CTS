import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

export type { Course };

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges, OnInit {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;
  isEnrolled: boolean = false;

  // Task 65 & 100: Inject EnrollmentService & NgRx Store
  constructor(
    private enrollmentService: EnrollmentService,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (this.course) {
      this.isEnrolled = this.enrollmentService.isEnrolled(this.course.id);
    }

    // Task 100: Select enrolled IDs from NgRx store
    this.store.select(selectEnrolledIds).subscribe(ids => {
      if (this.course) {
        this.isEnrolled = ids.includes(this.course.id) || this.enrollmentService.isEnrolled(this.course.id);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCardComponent ngOnChanges:', {
        previousValue: changes['course'].previousValue,
        currentValue: changes['course'].currentValue,
        firstChange: changes['course'].firstChange
      });
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled || !!this.course?.enrolled,
      'card--full': (this.course?.credits ?? 0) >= 4,
      'expanded': this.isExpanded
    };
  }

  get cardStyle() {
    let borderColor = '#94a3b8';
    if (this.course?.gradeStatus === 'passed') {
      borderColor = '#10b981';
    } else if (this.course?.gradeStatus === 'failed') {
      borderColor = '#ef4444';
    }

    return {
      'border-left': `6px solid ${borderColor}`
    };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Task 65 & 100: Enroll/Unenroll toggle action
  onEnroll(event: Event): void {
    event.stopPropagation(); // prevent card click navigation
    if (this.course) {
      if (this.isEnrolled) {
        this.enrollmentService.unenroll(this.course.id);
        this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
        this.isEnrolled = false;
      } else {
        this.enrollmentService.enroll(this.course.id);
        this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
        this.isEnrolled = true;
      }
      this.enrollRequested.emit(this.course.id);
    }
  }
}
