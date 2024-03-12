import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//librerias adicionales
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import {TabMenuModule} from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieCreateComponent } from '../movie/movie-create/movie-create.component';
import { DropdownModule } from 'primeng/dropdown';
import { AsociarActorPeliculaComponent } from './asociarActor-Pelicula/asociarActor-Pelicula.component';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';




@NgModule({
  imports: [
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
    DropdownModule,TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
   
  ],
  exports: [MovieDetailComponent],
  declarations: [MovieDetailComponent, MovieCreateComponent, AsociarActorPeliculaComponent]
})
export class MovieModule { }
