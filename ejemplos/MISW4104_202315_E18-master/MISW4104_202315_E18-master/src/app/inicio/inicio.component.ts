import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'GFG';

  movies!: Movie[];
  images: any[] = [
    {
      previewImageSrc:
        'https://img.europapress.es/fotoweb/fotonoticia_20140321100541-556429_800.jpg',
      thumbnailImageSrc:
        'https://th.bing.com/th/id/R.0b3bb48a6c1d9be13e55e5c59e76c680?rik=xYLK%2bGncwF9kNg&riu=http%3a%2f%2fwww.pequeocio.com%2fwp-content%2fuploads%2f2011%2f12%2fel-rey-leon-3d-pelicula.jpg&ehk=V%2fM%2b4fK22ieEsJHTNoN%2fa11ElEs7f5IgNgx8%2brY6Xm8%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Cascading Style Sheet',
      title: 'CSS'
    },
    {
      previewImageSrc:
        'https://th.bing.com/th/id/R.e1f338af4ef3d3e2685712d40e0164e4?rik=sO9%2fYJa%2fJrxalw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-xSI3S1g6oRU%2fTmuG2dRwfaI%2fAAAAAAAAAA0%2fE_CRqb2jAwk%2fs1600%2feclipse-.jpg&ehk=saVgqMBbnNbP%2f1H2uGDWh7rJ0Ht87OL0Z4y21ZZBIFg%3d&risl=&pid=ImgRaw&r=0',
      thumbnailImageSrc:
        'https://th.bing.com/th/id/R.e1f338af4ef3d3e2685712d40e0164e4?rik=sO9%2fYJa%2fJrxalw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-xSI3S1g6oRU%2fTmuG2dRwfaI%2fAAAAAAAAAA0%2fE_CRqb2jAwk%2fs1600%2feclipse-.jpg&ehk=saVgqMBbnNbP%2f1H2uGDWh7rJ0Ht87OL0Z4y21ZZBIFg%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Angular for Front end',
      title: 'Angular'
    },
    {
      previewImageSrc:
        'https://vignette.wikia.nocookie.net/doblaje/images/4/47/RFCartelOriginal.jpg/revision/latest?cb=20171125061739&path-prefix=es',
      thumbnailImageSrc:
        'https://vignette.wikia.nocookie.net/doblaje/images/4/47/RFCartelOriginal.jpg/revision/latest?cb=20171125061739&path-prefix=es',
      alt: 'Java Programming Language',
      title: 'Java'
    },
    {
      previewImageSrc:
        'https://www.ecartelera.com/images/sets/19500/19571.jpg',
      thumbnailImageSrc:
        'https://www.ecartelera.com/images/sets/19500/19571.jpg',
      alt: 'HyperText Markup Language',
      title: 'HTML'
    },
  ];;

  constructor(private movieService: MovieService) { }
  getMovies() {
    this.movieService.getMovies().subscribe(movies => { this.movies = movies });
  }

  ngOnInit() {
    this.images;
  }

}
