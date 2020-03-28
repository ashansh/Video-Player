import { TestBed } from '@angular/core/testing';

import { FetchVideoStreamsService } from './fetch-video-streams.service';

describe('FetchVideoStreamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchVideoStreamsService = TestBed.get(FetchVideoStreamsService);
    expect(service).toBeTruthy();
  });
});
