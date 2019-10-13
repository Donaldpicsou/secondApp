import { TestBed } from '@angular/core/testing';

import { AuthfirebaseService } from './authfirebase.service';

describe('AuthfirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthfirebaseService = TestBed.get(AuthfirebaseService);
    expect(service).toBeTruthy();
  });
});
