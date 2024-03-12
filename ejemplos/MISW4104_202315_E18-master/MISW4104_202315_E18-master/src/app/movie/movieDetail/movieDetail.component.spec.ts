/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';


import { Movie } from 'src/app/movie/movie';
import { MovieDetailComponent } from './movieDetail.component';
import { Director } from 'src/app/director/director';
import { YoutubeTrailers } from 'src/app/youtubeTrailers/youtubeTrailers';
import { Genre } from 'src/app/genero/genero';
import { Actor } from 'src/app/actor/actor';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let debug: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    
    const movies: Movie[] = [];
    const actors: Actor[] = [];
    const genre = new Genre(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      movies,
    );
    const youtubeTrailer = new YoutubeTrailers(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      movies

    );
    const director = new Director(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.datetime(),
      faker.lorem.sentence(),
      movies,

    );

    for (let i = 0; i < 3; i++) {
      
          const movie = new Movie(
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.datatype.number(),
            faker.lorem.sentence(),
            faker.datatype.datetime(),
            faker.datatype.number(),
            genre,
            actors,
            director,
            youtubeTrailer,
          );
            component.movies.push(movie);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 6 table rows', () => {
    const tableRows = debug.queryAll(By.css('tr'));
    expect(tableRows.length).toBe(6);
  });
  it('should have 3  headers', () => {
    const tableRows = debug.queryAll(By.css('th'));
    expect(tableRows.length).toBe(3);
  });

});
