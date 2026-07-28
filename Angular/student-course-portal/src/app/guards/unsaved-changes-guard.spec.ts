import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { unsavedChangesGuard, ComponentWithForm } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {
  const executeGuard: CanDeactivateFn<ComponentWithForm> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => unsavedChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should allow navigation when form is clean (no unsaved changes)', () => {
    const component: ComponentWithForm = {
      enrollForm: { dirty: false }
    };
    const result = executeGuard(component, {} as any, {} as any, {} as any);
    expect(result).toBeTrue();
  });

  it('should allow navigation when component has no form', () => {
    const result = executeGuard({} as any, {} as any, {} as any, {} as any);
    expect(result).toBeTrue();
  });
});
