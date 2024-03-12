import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
 import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { ActorModule } from './actor/actor.module';
import { GeneroModule } from './genero/genero.module';
import { DirectorModule } from './director/director.module';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { PanelModule } from 'primeng/panel';

import { MovieModule } from './movie/movie.module';
import { DropdownModule } from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './Interceptors/HttpErrorInterceptorService.service';
import { YoutubeTrailersModule } from './youtubeTrailers/youtubeTrailers.module';
import { CarouselModule } from 'primeng/carousel'; 
import { RadioButtonModule } from 'primeng/radiobutton';
import { InicioModule } from './inicio/inicio.module';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}




@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    RadioButtonModule,
    BrowserModule,
    ActorModule,
    HttpClientModule,
    NgxPaginationModule,
    DialogModule,
    BrowserAnimationsModule,
    TabMenuModule,
    AccordionModule,
    ButtonModule,
    AppRoutingModule,
    DataViewModule,
    PanelModule, 
    GeneroModule,
    DirectorModule,
    
    MovieModule,
    DropdownModule,
    InputSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    InputTextModule,
    YoutubeTrailersModule,
    CarouselModule,
    InicioModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      maxOpened: 1,
      autoDismiss: true,
      enableHtml: true
    }), 
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    TabMenuModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,  
      multi: true
    }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
 
})
export class AppModule { }

