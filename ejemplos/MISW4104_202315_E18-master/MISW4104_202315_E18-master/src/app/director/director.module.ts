import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DirectorDetailComponent } from './directorDetail/directorDetail.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { DirectorCreateComponent } from './director-create/director-create.component';
import { GeneroModule } from '../genero/genero.module';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    

    BrowserAnimationsModule,
    DialogModule,
    TableModule,
    TabMenuModule,
    CommonModule,
    TableModule,
    ButtonModule,
    GeneroModule,
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
  declarations: [DirectorDetailComponent,DirectorCreateComponent],
  exports: [DirectorDetailComponent]
})
export class DirectorModule { }
