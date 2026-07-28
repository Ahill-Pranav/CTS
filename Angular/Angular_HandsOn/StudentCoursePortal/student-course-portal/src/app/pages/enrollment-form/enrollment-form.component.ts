import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {
  // Model object bound via ngModel
  formData = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  // Task 46: Toggle boolean for success message display
  isSubmitted: boolean = false;
  submittedData: any = null;

  // Task 40: Submit handler accepting NgForm instance
  onSubmit(form: NgForm): void {
    console.log('Form submission state:');
    console.log('form.valid:', form.valid);
    console.log('form.value:', form.value);

    if (form.valid) {
      this.isSubmitted = true;
      this.submittedData = { ...form.value };
    }
  }

  // Task 47: Form reset action calling enrollForm.resetForm()
  onReset(form: NgForm): void {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.isSubmitted = false;
    this.submittedData = null;
  }
}
