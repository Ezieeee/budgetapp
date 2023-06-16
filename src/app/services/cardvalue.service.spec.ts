import { TestBed } from '@angular/core/testing';

import { CardvalueService } from './cardvalue.service';

describe('CardvalueService', () => {
  let service: CardvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
