import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';
import { StoreModule } from '@ngrx/store';
import { courseReducer } from '../../store/course/course.reducer';
import { enrollmentReducer } from '../../store/enrollment/enrollment.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
    enrolled: false,
    description: 'Core data structures and algorithms.'
  };

  // Task 101: Configure TestBed for standalone component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CourseCardComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({
          course: courseReducer,
          enrollment: enrollmentReducer
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Task 102: Test component creation
  it('should create the CourseCardComponent', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // Task 103: Test @Input rendering
  it('should display the course name in h3 via @Input binding', () => {
    component.course = mockCourse;
    // fixture.detectChanges() triggers change detection and updates the DOM
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3.course-title'));
    expect(h3).toBeTruthy();
    expect(h3.nativeElement.textContent.trim()).toBe('Data Structures');
  });

  // Task 103: Test course code displayed
  it('should render the course code from @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    const codeSpan = fixture.debugElement.query(By.css('.course-code'));
    expect(codeSpan.nativeElement.textContent.trim()).toBe('CS101');
  });

  // Task 104: Test @Output EventEmitter
  it('should emit enrollRequested with course.id when Enroll button is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    // Click the Enroll button (last button in card-actions)
    const buttons = fixture.debugElement.queryAll(By.css('.card-actions .btn'));
    const enrollBtn = buttons[buttons.length - 1];
    enrollBtn.nativeElement.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Task 105: Test ngOnChanges logging
  it('should log previousValue and currentValue in ngOnChanges', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(console, 'log');

    const updatedCourse: Course = { ...mockCourse, name: 'Advanced Algorithms' };

    component.ngOnChanges({
      course: new SimpleChange(mockCourse, updatedCourse, false)
    });

    expect(console.log).toHaveBeenCalledWith(
      'CourseCardComponent ngOnChanges:',
      jasmine.objectContaining({
        previousValue: mockCourse,
        currentValue: updatedCourse,
        firstChange: false
      })
    );
  });

  // Additional: Test badge rendered for gradeStatus 'passed'
  it('should render Passed badge for a passed course', () => {
    component.course = { ...mockCourse, gradeStatus: 'passed' };
    fixture.detectChanges();
    const badge = fixture.debugElement.query(By.css('.badge-passed'));
    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent.trim()).toBe('Passed');
  });
});
