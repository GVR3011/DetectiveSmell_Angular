/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AsociarActorPeliculaComponent } from './asociarActor-Pelicula.component';
import { GeneroModule } from 'src/app/genero/genero.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieModule } from '../movie.module';
import { DirectorModule } from 'src/app/director/director.module';
import { ActorModule } from 'src/app/actor/actor.module';
import { MovieService } from '../movie.service';
describe('AsociarActorPeliculaComponent', () => {
  let component: AsociarActorPeliculaComponent;
  let fixture: ComponentFixture<AsociarActorPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociarActorPeliculaComponent ],
      imports:[HttpClientModule, GeneroModule,MovieModule, DirectorModule,ActorModule ],
      providers: [ MovieService,, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarActorPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
