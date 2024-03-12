import { Component, Input,OnInit } from '@angular/core';
import { Genre } from '../genero';
import { GeneroService } from '../genero.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-generoDetail',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css'],
  providers: [MessageService]
})
export class GeneroListComponent implements OnInit {

  @Input() generoDetail!: Genre;
  genres: Array<Genre>=[];
  private display!:boolean;
  visible:boolean=false;

  constructor(private generoService: GeneroService, private messageService: MessageService) { }
 
  selectedGenero1!: Genre;
  getGeneros() {
    this.generoService.getGeneros().subscribe(genres => {this.genres = genres});
  }
  


  ngOnInit() {
    this.getGeneros();
  }
  selectGenero(genero: Genre) {
    this.messageService.add({severity:'info', summary:'Genero Selected', detail: genero.type});
}

onRowSelect(event:any) {
    this.messageService.add({severity:'info', summary:'Genero Selected', detail: event.genero.type});
}

onRowUnselect(event:any) {
    this.messageService.add({severity:'info', summary:'Genero Unselected',  detail: event.genero.type});
}

showDialog() {
  this.display = true;
  this.visible=true;
}

}

