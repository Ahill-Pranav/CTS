import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Task 11: String interpolation property
  portalName: string = 'Student Course Portal';

  // Task 12: Property binding flag
  isPortalActive: boolean = true;

  // Task 13: Event binding message property
  message: string = '';

  // Task 14: Two-way data binding property
  searchTerm: string = '';

  // Task 15: Comment explaining property binding vs ngModel
  /*
   * DIFFERENCE BETWEEN [property] AND [(ngModel)]:
   * - [property] (One-Way Binding: Component -> DOM):
   *   Data flows in one direction from the TypeScript component class to the DOM element property.
   *   Modifications in the DOM (e.g. user typing in an input) will NOT automatically update the component property.
   *
   * - [(ngModel)] (Two-Way Data Binding: DOM <-> Component):
   *   Data flows bi-directionally between the TypeScript component property and the DOM input element.
   *   Any changes made by the user in the input immediately update the component state, and any programmatic
   *   changes in the component state immediately update the input value in the DOM.
   */

  // Task 16: Lifecycle hook ngOnInit
  ngOnInit(): void {
    console.log('HomeComponent initialised - courses loaded');
  }

  // Task 17: Lifecycle hook ngOnDestroy
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Task 13: Event binding handler method
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
