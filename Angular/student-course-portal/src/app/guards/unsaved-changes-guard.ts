import { CanDeactivateFn } from '@angular/router';

export interface ComponentWithForm {
  enrollForm?: { dirty: boolean };
}

export const unsavedChangesGuard: CanDeactivateFn<ComponentWithForm> = (component) => {
  if (component?.enrollForm?.dirty) {
    return window.confirm('You have unsaved changes in your enrollment form. Are you sure you want to leave?');
  }
  return true;
};
