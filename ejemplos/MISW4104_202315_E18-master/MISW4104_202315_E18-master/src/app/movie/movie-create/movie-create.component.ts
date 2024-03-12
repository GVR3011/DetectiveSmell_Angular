import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneroService } from 'src/app/genero/genero.service';
import { Genre } from 'src/app/genero/genero';
import { Director } from 'src/app/director/director';
import { Actor } from 'src/app/actor/actor';
import { ActorService } from 'src/app/actor/actor.service';
import { DirectorService } from 'src/app/director/director.service';
import { YoutubeTrailers } from 'src/app/youtubeTrailers/youtubeTrailers';
import { YoutubeTrailersService } from 'src/app/youtubeTrailers/youtubeTrailers.service';


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movieForm!: FormGroup;
  loading: boolean = false;
  generos!: Array<Genre>;
  directores!: Array<Director>;
  actores!: Array<Actor>;
  trailers!: Array<YoutubeTrailers>;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private movieService: MovieService, private generoService: GeneroService,
    private directorService: DirectorService, private actorService: ActorService,
    private youtubeTrailersService:YoutubeTrailersService) {
  }
  getGeneros() {
    this.generoService.getGeneros().subscribe(genres => { this.generos = genres });

  }
  getActores() {
    this.actorService.getActores().subscribe(actores => { this.actores = actores });

  }
  getDirectores() {
    this.directorService.getDirectores().subscribe(directores => { this.directores = directores });

  }
  getTrailers(){
    this.youtubeTrailersService.getTrailers().subscribe(trailers => { this.trailers = trailers });

  }
  ngOnInit() {
    this.getGeneros();
    this.getActores();
    this.getDirectores();
    this.getTrailers();
    this.movieForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      poster: ["", Validators.required],
      youtubeTrailer: ["", Validators.required],
      duration: ["", [Validators.required, Validators.minLength(2)]],
      country: ["", [Validators.required, Validators.minLength(3)]],
      releaseDate: ["", Validators.required],
      popularity: ["", [Validators.required, Validators.maxLength(1)]],
      director: ["", Validators.required],
      actor: ["", Validators.required],
      genre: ["", Validators.required],
      id: ["", [Validators.required, Validators.minLength(32), Validators.pattern("[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9]")]]

    })

  }


  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
  createMovie(movie: Movie) {
    console.info("La pelicula was created: ", movie)
    this.movieService.createMovies(movie).subscribe(movie => {
      console.info("La pelicula was created: ", movie)
      this.toastr.success("Confirmation", "Movie created")
      this.movieForm.reset();
    })

  }
  cancelCreation() {
    this.movieForm.reset();
  }
}
