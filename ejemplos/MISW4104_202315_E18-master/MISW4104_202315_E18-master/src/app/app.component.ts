
import { AppService } from './app.service';
import { ConfirmationService, MenuItem, PrimeNGConfig } from 'primeng/api';
import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService]
})
export class AppComponent implements OnDestroy {
  lang: string = "es";
  subscription: Subscription;
  modo: string = "";
  themes = [
    {
      id: 'lara-light-blue',
      label: 'Claro'

    },
    {
      id: 'lara-dark-blue',
      label: 'Oscuro'
    }
  ]
  selectedTheme: { id: string; label: string } = this.themes[0];


  visible: boolean = false;
  title = 'MISW4104_202315_E18';
  pages: number = 1;

  lenguaje: string = 'es';

  dataset: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor(private appservice: AppService, public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig, private confirmationService: ConfirmationService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    let lang = browserLang?.match(/en|es/) ? browserLang : 'es';
    this.changeLang(lang);

    this.subscription = this.translate.stream('primeng').subscribe(data => {
      this.primeNGConfig.setTranslation(data);
    });
  }
  changeLang(lang: string) {
    this.lenguaje = lang;
    this.translate.use(lang);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  changeTheme(themeId: string) {
    this.appservice.switchTheme(themeId);
  }

  cambiarTamanoFuente(aumentaReduce: string) {
    this.appservice.changeFont(aumentaReduce);

  }


  items!: MenuItem[];
  itemsIngles!: MenuItem[];
  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/inicio' },
      { label: 'Actores', routerLink: "/actor" },
      { label: 'Directores', routerLink: "/director" },
      { label: 'Peliculas', routerLink: "/movie" },
      { label: 'Generos', routerLink: "/genero" },
      { label: 'Corto', routerLink: "/trailer" },
    ];
    this.itemsIngles = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/inicio' },
      { label: 'Actors', routerLink: "/actor" },
      { label: 'Directors', routerLink: "/director" },
      { label: 'Movies', routerLink: "/movie" },
      { label: 'Genres', routerLink: "/genero" },
      { label: 'Trailers', routerLink: "/trailer" },
    ];

    this.activeItem = this.items[0];
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  confirm(event: any) {
    this.confirmationService.confirm({
        target: event.target,
        message: this.translate.instant('demo.message'),
        icon: 'pi pi-exclamation-triangle'
    });
}
}

