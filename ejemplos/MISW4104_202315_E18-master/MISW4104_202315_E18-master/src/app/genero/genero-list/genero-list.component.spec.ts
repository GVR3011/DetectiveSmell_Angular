/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { GeneroListComponent } from './genero-list.component';
import { Genre } from '../genero';
import { Movie } from 'src/app/movie/movie';
import { GeneroService } from '../genero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('GeneroListComponent', () => {
  let component: GeneroListComponent;
  let fixture: ComponentFixture<GeneroListComponent>;
  let debug: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroListComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListComponent);
    component = fixture.componentInstance;
    
    const movies: Movie[] = [];

    for (let i = 0; i < 10; i++) {
        const genre = new Genre(
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            movies,
          );

          component.genres.push(genre);

    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  afterAll(() => {
    TestBed.resetTestingModule();
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
