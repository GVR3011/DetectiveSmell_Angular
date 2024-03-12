import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/actor/actor';
import { ActorService } from 'src/app/actor/actor.service';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ActorDetail } from 'src/app/actor/actorDetail';

@Component({
  selector: 'app-asociarActor-Pelicula',
  templateUrl: './asociarActor-Pelicula.component.html',
  styleUrls: ['./asociarActor-Pelicula.component.css']
})
export class AsociarActorPeliculaComponent implements OnInit {
  @Input() selectedMovie!: Movie;
  movieForm!: FormGroup;
  actores!: Array<ActorDetail>;
  movies: Array<Movie> = [];
  actor!:ActorDetail;     
  valores!:Array<string>;        
  selectedItem!:Actor;                      


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private actorService: ActorService, private movieService: MovieService) { }

  getActores() {
    this.actorService.getActores().subscribe(actores => { this.actores = actores });

  }

  ngOnInit() {
    this.getActores();

    this.movieForm = this.formBuilder.group({
      actors: ["", [Validators.required, Validators.minLength(2)]],

    })

  }
  createMovieAsociacionActor(movie:Movie) {

     this.movieService.updateMovie(this.selectedMovie, movie.actors).subscribe(selectedMovie => {
      console.info("Actor asociado: ", movie.actors)
      this.toastr.success("Confirmation", "Movie Actualizada")
      this.movieForm.reset();
    })

  }
  cancelCreation() {
    this.movieForm.reset();
  }

}
