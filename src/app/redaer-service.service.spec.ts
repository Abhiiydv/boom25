import { TestBed } from '@angular/core/testing';

import { RedaerServiceService } from './redaer-service.service';

describe('RedaerServiceService', () => {
  let service: RedaerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedaerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
