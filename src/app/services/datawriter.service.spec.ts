import { TestBed } from '@angular/core/testing';

import { DatawriterService } from './datawriter.service';

describe('DatawriterService', () => {
  let service: DatawriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatawriterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
