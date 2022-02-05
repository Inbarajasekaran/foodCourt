import { TestBed } from '@angular/core/testing';

import { TodaysSpecialService } from './todays-special.service';

describe('TodaysSpecialService', () => {
  let service: TodaysSpecialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaysSpecialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
