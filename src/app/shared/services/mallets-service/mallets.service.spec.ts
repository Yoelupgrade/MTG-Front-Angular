import { TestBed } from '@angular/core/testing';

import { MalletsService } from './mallets.service';

describe('MalletsService', () => {
  let service: MalletsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalletsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
