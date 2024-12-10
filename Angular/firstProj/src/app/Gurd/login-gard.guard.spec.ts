import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginGardGuard } from './login-gard.guard';

describe('loginGardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginGardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
