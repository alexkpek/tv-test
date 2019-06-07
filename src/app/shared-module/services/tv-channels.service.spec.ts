import { TestBed } from '@angular/core/testing';

import { TvChannelsService } from './tv-channels.service';

describe('TvChannelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvChannelsService = TestBed.get(TvChannelsService);
    expect(service).toBeTruthy();
  });
});
