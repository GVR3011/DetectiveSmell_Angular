/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { YoutubeTrailersListComponent } from './youtubeTrailers-list.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { TabMenuModule } from 'primeng/tabmenu';
import { YoutubeTrailersModule } from '../youtubeTrailers.module';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { YoutubeTrailers } from '../youtubeTrailers';
import { Movie } from 'src/app/movie/movie';
import { YoutubeTrailersService } from '../youtubeTrailers.service';
describe('YoutubeTrailersListComponent', () => {
  let component: YoutubeTrailersListComponent;
  let fixture: ComponentFixture<YoutubeTrailersListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, TableModule, ButtonModule,
        YoutubeTrailersModule, DialogModule,
        TabMenuModule],
      declarations: [YoutubeTrailersListComponent],
      providers: [YoutubeTrailersService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeTrailersListComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++) {
      const movies: Movie[] = [];
      const youtubeTrailer = new YoutubeTrailers(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        movies

      );
      component
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
