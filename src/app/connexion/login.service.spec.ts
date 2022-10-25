import { TestBed } from '@angular/core/testing';

import { FakeLoginService } from './login/login.service';

describe('LoginService', () => {
  let service: FakeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
