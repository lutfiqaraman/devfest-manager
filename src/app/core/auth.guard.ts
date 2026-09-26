import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAdmin = localStorage.getItem('isAdmin') === 'true'

  if(isAdmin) {
    return true;
  }

  alert('not authorized');
  return router.createUrlTree(['/']);
}
