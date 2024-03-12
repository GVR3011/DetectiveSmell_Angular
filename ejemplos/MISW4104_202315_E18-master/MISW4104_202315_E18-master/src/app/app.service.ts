import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
  fontSize: number = 14;
  changeFont(operator: string) {
    operator === '+' ? this.fontSize++ : this.fontSize--;
    this.document.getElementsByTagName('html')[0].style.fontSize = `${this.fontSize}px`;
  }
}


