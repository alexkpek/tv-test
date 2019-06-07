import { TestBed } from '@angular/core/testing';

import { TvChannels.ApiService } from './tv-channels.api.service';

describe('TvChannels.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvChannels.ApiService = TestBed.get(TvChannels.ApiService);
    expect(service).toBeTruthy();
  });
});
