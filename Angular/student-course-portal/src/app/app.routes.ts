import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  // Task 72: Nested routes under /courses
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      // Task 69: Route parameter :id
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  // Task 76: CanActivate AuthGuard protecting /profile
  {
    path: 'profile',
    component: StudentProfileComponent,
    canActivate: [authGuard]
  },

  // Task 73: Lazy-loaded feature route for /enroll
  {
    path: 'enroll',
    loadChildren: () => import('./features/enrollment/enrollment.routes').then(m => m.ENROLLMENT_ROUTES)
  },

  // Task 77: CanDeactivate UnsavedChangesGuard on reactive form
  {
    path: 'enroll-reactive',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [unsavedChangesGuard]
  },

  // Task 68: Wildcard route for 404 page
  { path: '**', component: NotFoundComponent }
];
