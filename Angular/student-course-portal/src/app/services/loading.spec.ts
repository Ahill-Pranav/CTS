import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoadingService] });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit true when show() is called', (done) => {
    service.show();
    service.isLoading$.subscribe(val => {
      expect(val).toBeTrue();
      done();
    });
  });

  it('should emit false when hide() is called', (done) => {
    service.show();
    service.hide();
    service.isLoading$.subscribe(val => {
      expect(val).toBeFalse();
      done();
    });
  });
});
