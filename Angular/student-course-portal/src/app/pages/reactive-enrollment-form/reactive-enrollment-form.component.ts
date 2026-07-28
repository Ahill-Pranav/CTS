import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

// Task 53: Custom Synchronous Validator
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const val = control.value ? String(control.value) : '';
  if (val.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Task 55: Custom Asynchronous Validator
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = control.value ? String(control.value).toLowerCase() : '';
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  isSubmitted: boolean = false;
  submittedData: any = null;

  // Task 49: Inject FormBuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Task 49 & 56: Build FormGroup with Validators & FormArray
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // Task 57: Typed getter for FormArray
  /*
   * Task 57 Comment:
   * Providing a typed getter `get additionalCourses()` prevents the need for explicit type casting
   * in HTML templates (e.g. as FormArray), providing full TypeScript type safety and cleaner HTML.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Task 56: Add dynamic course control
  addCourseControl(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Task 56: Remove dynamic course control
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Task 51 & 52: Form submission and value comparison
  onSubmit(): void {
    // Task 52 Comment:
    /*
     * DIFFERENCE BETWEEN value AND getRawValue():
     * - enrollForm.value returns an object containing values ONLY for enabled controls in the group.
     * - enrollForm.getRawValue() returns an object containing values for ALL controls, including disabled ones.
     */
    console.log('Reactive Form Submission:');
    console.log('enrollForm.value (enabled controls only):', this.enrollForm.value);
    console.log('enrollForm.getRawValue() (all controls including disabled):', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.isSubmitted = true;
      this.submittedData = this.enrollForm.getRawValue();
    }
  }

  resetForm(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.isSubmitted = false;
    this.submittedData = null;
  }
}
