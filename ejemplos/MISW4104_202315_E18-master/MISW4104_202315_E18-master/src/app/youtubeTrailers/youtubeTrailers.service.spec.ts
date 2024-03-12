/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { YoutubeTrailersService } from './youtubeTrailers.service';



describe('Service: YoutubeTrailers', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeTrailersService]
    });
  });

  it('should ...', inject([YoutubeTrailersService], (service: YoutubeTrailersService) => {
    expect(service).toBeTruthy();
  }));
});
