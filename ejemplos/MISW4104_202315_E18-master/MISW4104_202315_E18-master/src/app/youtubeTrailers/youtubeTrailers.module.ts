import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeTrailersListComponent } from './youtubeTrailers-list/youtubeTrailers-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//librerias adicionales
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubeTrailerCreateComponent } from './youtubeTrailer-create/youtubeTrailer-create.component';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { GeneroModule } from '../genero/genero.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DialogModule,
    TableModule,
    ButtonModule,
    GeneroModule,
    CardModule,
    ImageModule,
    DialogModule,
    TabMenuModule,
    InputTextModule,
    AutoCompleteModule,
    ReactiveFormsModule,TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [YoutubeTrailersListComponent],
  declarations: [YoutubeTrailersListComponent, YoutubeTrailerCreateComponent]
})
export class YoutubeTrailersModule { }
