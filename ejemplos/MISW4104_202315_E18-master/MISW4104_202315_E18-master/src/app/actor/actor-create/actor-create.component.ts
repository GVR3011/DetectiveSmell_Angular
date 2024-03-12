import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneroService } from 'src/app/genero/genero.service';
import { Genre } from 'src/app/genero/genero';
import { Director } from 'src/app/director/director';
import { Actor } from 'src/app/actor/actor';
import { ActorService } from 'src/app/actor/actor.service';

import { Movie } from '../../movie/movie';
import { MovieService } from '../../movie/movie.service';



@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})

export class ActorCreateComponent implements OnInit {
  actorForm!: FormGroup;
  loading: boolean = false;
  movies!: Array<Movie>;
  actores!: Array<Actor>;
  

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private movieService: MovieService, 
     private actorService: ActorService,
    ) {
  }
  
  getActores() {
    this.actorService.getActores().subscribe(actores => { this.actores = actores });

  }
 
  getMovies(){
    this.movieService.getMovies().subscribe(movies => { this.movies = movies });

  }
  ngOnInit() {
   
    this.getActores();
    
    this.getMovies();
    this.actorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      photo: ["", Validators.required],
      biography: ["", Validators.required],
      birthDate: ["", Validators.required],
      nationality: ["", [Validators.required, Validators.minLength(3)]],
      id: ["", [Validators.required, Validators.minLength(32), Validators.pattern("[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9]")]]

    })

  }


  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
  createActor(actor: Actor) {
    console.info("el actor  was created: ", this.actores)
    this.actorService.createActor(actor).subscribe(actor => {
      console.info("el actor was created: ", actor)
      this.toastr.success("Confirmation", "Movie created")
      this.actorForm.reset();
    })

  }
  cancelCreation() {
    this.actorForm.reset();
  }
}
