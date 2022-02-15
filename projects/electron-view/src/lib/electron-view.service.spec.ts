import { TestBed } from '@angular/core/testing';

import { ElectronViewService } from './electron-view.service';

describe('ElectronViewService', () => {
  let service: ElectronViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
