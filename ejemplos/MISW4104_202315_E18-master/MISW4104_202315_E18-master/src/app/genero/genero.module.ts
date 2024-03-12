import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListComponent } from './genero-list/genero-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//librerias adicionales
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import  {TabMenuModule} from 'primeng/tabmenu';
import { GeneroCreateComponent } from './genero-create/genero-create.component';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
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
  exports: [GeneroListComponent,GeneroCreateComponent],
  declarations: [GeneroListComponent, GeneroCreateComponent]
})
export class GeneroModule { }
