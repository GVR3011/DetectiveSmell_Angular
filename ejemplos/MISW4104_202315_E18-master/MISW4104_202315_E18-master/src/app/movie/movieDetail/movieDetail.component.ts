import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MessageService } from 'primeng/api';
import { MovieService } from '../movie.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-movieDetail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.css'],
  providers: [MessageService]
})
export class MovieDetailComponent implements OnInit {
  @Input() movieDetail!: Movie;
  movies: Array<Movie> = [];
  visible:boolean=false;
  visiblex:boolean=false;
  movieAsociar!:Movie;


  constructor(private movieService: MovieService, private messageService: MessageService) { }

  selectedMovie1!: Movie;
  getMovies() {
    this.movieService.getMovies().subscribe(movies => { this.movies = movies });
  }


  ngOnInit() {
    this.getMovies();
  }
  selectMmovie(movie: Movie) {
    this.messageService.add({ severity: 'info', summary: 'Movie Selected', detail: movie.title });
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Movie Selected', detail: event.movies.title });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Movie Unselected', detail: event.movies.title });
  }
  showDialog() {
    this.visible=true;
  }
  showDialogx(movie:Movie) {
    this.visiblex=true;
    this.movieAsociar=movie;
  }
}
