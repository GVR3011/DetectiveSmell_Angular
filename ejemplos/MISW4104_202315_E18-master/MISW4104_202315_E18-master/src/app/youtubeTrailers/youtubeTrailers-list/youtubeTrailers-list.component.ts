import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { YoutubeTrailersService } from '../youtubeTrailers.service';
import { YoutubeTrailers } from '../youtubeTrailers';

@Component({
  selector: 'app-youtubeTrailers-list',
  templateUrl: './youtubeTrailers-list.component.html',
  styleUrls: ['./youtubeTrailers-list.component.css'],
  providers: [MessageService]
})
export class YoutubeTrailersListComponent implements OnInit {
  trailers: Array<YoutubeTrailers>=[];
  private display!:boolean;
  visible:boolean=false;
  constructor(private messageService: MessageService, private youtubeTrailersService: YoutubeTrailersService) { }

  selectedTrailer1!: YoutubeTrailers;
  getTrailers() {
    this.youtubeTrailersService.getTrailers().subscribe(trailers => {this.trailers = trailers});
  }
  
  ngOnInit() {
    this.getTrailers();
  }
  selectTrailer(trailers: YoutubeTrailers) {
    this.messageService.add({severity:'info', summary:'Trailer Selected', detail: trailers.name});
}

onRowSelect(event:any) {
    this.messageService.add({severity:'info', summary:'Trailer Selected', detail: event.trailers.name});
}

onRowUnselect(event:any) {
    this.messageService.add({severity:'info', summary:'Trailer Unselected',  detail: event.trailers.name});
}

showDialog() {
  this.display = true;
  this.visible=true;
}

}

