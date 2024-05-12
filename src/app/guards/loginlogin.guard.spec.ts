import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginloginGuard } from './loginlogin.guard';

describe('loginloginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginloginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
