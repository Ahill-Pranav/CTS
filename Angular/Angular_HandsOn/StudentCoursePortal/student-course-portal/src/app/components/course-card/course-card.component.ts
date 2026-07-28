import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled?: boolean;
  description?: string;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  // Task 20: @Input course property
  @Input() course!: Course;

  // Task 21: @Output enrollRequested EventEmitter
  @Output() enrollRequested = new EventEmitter<number>();

  // Task 31: Property for expand/collapse details
  isExpanded: boolean = false;

  // Task 18: Implement ngOnChanges lifecycle hook
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCardComponent ngOnChanges:', {
        previousValue: changes['course'].previousValue,
        currentValue: changes['course'].currentValue,
        firstChange: changes['course'].firstChange
      });
    }
  }

  // Task 32: Refactored getter for ngClass object binding
  /*
   * Task 32 Comment:
   * Using a TypeScript getter `get cardClasses()` keeps HTML templates clean and concise by moving
   * complex conditional logic into the component class where it can be tested easily and reused.
   */
  get cardClasses() {
    return {
      'card--enrolled': !!this.course?.enrolled,
      'card--full': (this.course?.credits ?? 0) >= 4,
      'expanded': this.isExpanded
    };
  }

  // Task 30: Dynamic border style calculation via getter for ngStyle
  get cardStyle() {
    let borderColor = '#94a3b8'; // default pending grey
    if (this.course?.gradeStatus === 'passed') {
      borderColor = '#10b981'; // green
    } else if (this.course?.gradeStatus === 'failed') {
      borderColor = '#ef4444'; // red
    }

    return {
      'border-left': `6px solid ${borderColor}`
    };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnroll(): void {
    if (this.course) {
      this.enrollRequested.emit(this.course.id);
    }
  }
}
