import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActorComponent } from './actor.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActorService } from './actor.service';
import { Actor } from './actor';
import { Movie } from '../movie/movie'
import { Genre } from '../genero/genero'
import { Director } from '../director/director'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MovieModule } from '../movie/movie.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { MovieService } from '../movie/movie.service';
import { YoutubeTrailers } from '../youtubeTrailers/youtubeTrailers';
import { GeneroModule } from '../genero/genero.module';
import { GeneroService } from '../genero/genero.service';


describe('ActorComponent', () => {
  let component: ActorComponent;
  let fixture: ComponentFixture<ActorComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, TableModule, ButtonModule,
        MovieModule, DialogModule, GeneroModule,
        TabMenuModule],
      declarations: [ActorComponent],
      providers: [ActorService, HttpClient, HttpHandler,GeneroService,MovieService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorComponent);
    component = fixture.componentInstance;

    const movies: Movie[] = [];
    const actors: Actor[] = [];

   /* const genre = new Genre(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      movies,
    ); */
   /* const youtubeTrailer = new YoutubeTrailers(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      movies

    ); */
 /*   const director = new Director(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.datetime(),
      faker.lorem.sentence(),
      movies,

    );

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
    ); */

    for (let i = 0; i < 3; i++) {
      
      const actor = new Actor(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        movies
      );
      component.actores.push(actor);
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

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  var mensajeSaludo=function(){

  }

  var mensaje_saludo=()=>"Hola mundo";

});









// it('should have 3 table rows', () => {
//   const tableRows = debug.queryAll(By.css('tbody tr'));
//   expect(tableRows.length).toBe(3);
// });
//   it('should have 4 <div.col.mb-2> elements', () => {
//     expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(4)
//   });

//   it('should have 4 <card.p-2> elements', () => {
//     expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(4)
//   });

//   /*it('should have 10 <img> elements', () => {
//     expect(debug.queryAll(By.css('img'))).toHaveSize(10)
//   });*/

// // //   it('should have 10 <div.card-body> elements', () => {
// // //     expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
// // //   });

//   it('should have th tag with the directores.name', () => {
//     debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
//       expect(h5.nativeElement.textContent).toContain(component.directores[i].name)
//     });
//   });







