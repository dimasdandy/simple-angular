import { TestBed } from '@angular/core/testing';

import { LoadingcircleService } from './loadingcircle.service';

describe('LoadingcircleService', () => {
  let service: LoadingcircleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingcircleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
