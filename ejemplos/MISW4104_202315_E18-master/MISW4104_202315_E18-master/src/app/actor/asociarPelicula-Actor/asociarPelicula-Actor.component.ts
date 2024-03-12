import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../actor';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Movie } from 'src/app/movie/movie';
import { ActorService } from '../actor.service';
import { MovieService } from 'src/app/movie/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asociarPelicula-Actor',
  templateUrl: './asociarPelicula-Actor.component.html',
  styleUrls: ['./asociarPelicula-Actor.component.css']
})
export class AsociarPeliculaActorComponent implements OnInit {
  @Input() selectedActor!: Actor;
  actorForm!: FormGroup;
  actores!: Array<Actor>;
  movies!: Array<Movie>;
  movie!:Movie;     
  valores!:Array<string>;        
  selectedItem!:Actor;                      


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private actorService: ActorService, private movieService: MovieService) { }

  getMovies() {
    this.movieService.getMovies().subscribe(movies => { this.movies = movies });

  }

  ngOnInit() {
    this.getMovies();

    this.actorForm = this.formBuilder.group({
      movies: ["", [Validators.required, Validators.minLength(2)]],

    })

  }
  createActorAsociacionPelicula(actor:Actor) {

    /* this.actorService.updateActor(this.selectedActor, actor.movies).subscribe(selectedMovie => {
      console.info("Actor asociado: ", actor.movies)
      this.toastr.success("Confirmation", "Movie Actualizada")
      this.actorForm.reset();
    }) */

  }
  cancelCreation() {
    this.actorForm.reset();
  }

}

