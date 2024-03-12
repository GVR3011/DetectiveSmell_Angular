import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { CarouselModule } from 'primeng/carousel'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CarouselModule,
    TranslateModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule { }
