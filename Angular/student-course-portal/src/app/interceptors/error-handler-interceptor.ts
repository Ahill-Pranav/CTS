import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  // Task 90: Global HTTP error handling interceptor
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.error('Global Interceptor: 401 Unauthorized - redirecting to login');
      } else if (error.status === 500) {
        console.error('Global Interceptor: 500 Internal Server Error');
      }
      return throwError(() => error);
    })
  );
};
