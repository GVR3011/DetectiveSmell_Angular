
import { Component, OnInit } from '@angular/core';
import { Actor } from './actor';
import { ActorDetail } from './actorDetail';
import { ActorService } from './actor.service';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actores: Array<Actor> = [];
  movies: Array<Actor> = [];
  actorDetail: Array<Actor> = [];
  visible: boolean = false;
  visibleCrear : boolean= false;
  position: string = "center";
  actor_res!: Array<ActorDetail>;
  display: boolean = true;
  //actor : Actor;
  visiblex:boolean=false;
  actorAsociar!:Actor;


  constructor(private actorService: ActorService) { }

  selectedActor1!: Actor;



  getActores() {
    this.actorService.getActores().subscribe(actores => {
      this.actores = actores;
    });
  }
  getActorDetail(actorId: string) {
    this.actorService.getActor(actorId).subscribe(actorDetail => {
      this.actorDetail = actorDetail;
    });

  }
  getMovies(actorId: string) {
    this.actorService.getMovies(actorId).subscribe(result => {
      this.movies = result;

    });
  }

  ngOnInit() {
    this.getActores();
  }



  showDialog(position: string, actor: Actor) {

    //this.actorService.getMovies(actor)
    this.actor_res = Object.assign([actor]);
    
    console.log(actor)
    console.log(this.actor_res)
    this.position = position;
    this.visible = true;
    console.log("Estos son los actores");



  }

  showDialogCrear() {
    this.display = true;
    this.visibleCrear=true;
  }

  showDialogx(actor:Actor) {
    this.visiblex=true;
    this.actorAsociar=actor;
  }
  
}









