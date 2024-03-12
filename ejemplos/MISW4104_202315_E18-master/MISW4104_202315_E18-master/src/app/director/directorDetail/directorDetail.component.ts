import { Component, OnInit, Input } from '@angular/core';
import {Director} from '../director';
import { DirectorService } from '../director.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-directorDetail',
  templateUrl: './directorDetail.component.html',
  styleUrls: ['./directorDetail.component.css'],
  providers: [MessageService]
})
export class DirectorDetailComponent implements OnInit {

  @Input() directorDetail!: Director;
  constructor(private directorService: DirectorService, private messageService:MessageService) { }
  directores: Array<Director>=[];
  direId: string="";
  private display!:boolean;
  visibleCrear : boolean= false;
  


  selectedDirector1!: Director;



 
  selectMmovie(director: Director) {
    this.messageService.add({ severity: 'info', summary: 'Movie Selected', detail: director.name });
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Movie Selected', detail: event.director.name });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Movie Unselected', detail: event.director.name });
  }
  showDialog() {
    this.display = true;
  }

  ngOnInit() {
    this. getDirectores();
  }
  getDirectores() {
    this.directorService.getDirectores().subscribe(directores=>{
      this.directores = directores;
    });
 
   
  }

  showDialogCrear() {
    this.display = true;
    this.visibleCrear=true;
  }

}
