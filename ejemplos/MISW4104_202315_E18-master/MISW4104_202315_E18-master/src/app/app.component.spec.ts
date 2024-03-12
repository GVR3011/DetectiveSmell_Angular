import { TestBed, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActorComponent } from './actor/actor.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectorDetailComponent } from './director/directorDetail/directorDetail.component';
import { GeneroModule } from './genero/genero.module';
import { DirectorModule } from './director/director.module';
import { DataViewModule } from 'primeng/dataview';
import { AccordionModule } from 'primeng/accordion';


import { MovieDetailComponent } from './movie/movieDetail/movieDetail.component';
import { GeneroListComponent } from './genero/genero-list/genero-list.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { PanelModule } from 'primeng/panel';

import { MovieModule } from './movie/movie.module';
import { DropdownModule } from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'primeng/carousel';


  describe('AppComponent', () => {


    
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
   
  });

  it(`should have as title 'MISW4104_202315_E18'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MISW4104_202315_E18');
  });
});

