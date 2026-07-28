import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to logged in', () => {
    expect(service.isLoggedIn).toBeTrue();
  });

  it('should toggle to logged out on logout()', () => {
    service.logout();
    expect(service.isLoggedIn).toBeFalse();
  });
});
