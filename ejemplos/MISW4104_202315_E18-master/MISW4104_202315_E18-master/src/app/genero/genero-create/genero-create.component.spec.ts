/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MovieModule } from '../../movie/movie.module';
import { GeneroCreateComponent } from './genero-create.component';
import { faker } from '@faker-js/faker';
import { Movie } from 'src/app/movie/movie';
import { Genre } from '../genero';
import { GeneroService } from '../genero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('GeneroCreateComponent', () => {
  let component: GeneroCreateComponent;
  let fixture: ComponentFixture<GeneroCreateComponent>;
  let debug: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroCreateComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, ButtonModule, MovieModule ],
      providers: [ GeneroService, HttpClient, HttpHandler  ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroCreateComponent);
    component = fixture.componentInstance;
    const movies: Movie[] = [];

    
        const genre = new Genre(
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            movies,
          );

          component.createGenero(genre);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  

});
