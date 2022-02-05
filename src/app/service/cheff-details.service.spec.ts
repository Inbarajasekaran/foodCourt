import { TestBed } from '@angular/core/testing';

import { CheffDetailsService } from './cheff-details.service';

describe('CheffDetailsService', () => {
  let service: CheffDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheffDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
