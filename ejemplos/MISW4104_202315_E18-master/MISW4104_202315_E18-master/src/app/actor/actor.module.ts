import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MovieModule } from '../movie/movie.module';

import { ActorCreateComponent } from './actor-create/actor-create.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';





//librerias adicionales

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import {TabMenuModule} from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AsociarPeliculaActorComponent } from './asociarPelicula-Actor/asociarPelicula-Actor.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DialogModule,
    TableModule,
    ButtonModule,
    MovieModule,
    TabMenuModule,
    CommonModule,
    BrowserAnimationsModule,
    DialogModule,
    TableModule,
    ButtonModule,
    CardModule,
    ImageModule,
    TabMenuModule,
    InputTextModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    DropdownModule,
    DropdownModule,TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
   
  ],
  declarations: [ActorComponent,ActorCreateComponent, AsociarPeliculaActorComponent],
  exports: [ActorComponent]
})
export class ActorModule { }
