import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneroService } from 'src/app/genero/genero.service';
import { Genre } from 'src/app/genero/genero';
import { Director } from 'src/app/director/director';

import { DirectorService } from 'src/app/director/director.service';

import { Movie } from '../../movie/movie';
import { MovieService } from '../../movie/movie.service';

@Component({
  selector: 'app-director-create',
  templateUrl: './director-create.component.html',
  styleUrls: ['./director-create.component.css']
})
export class DirectorCreateComponent implements OnInit {
  directorForm!: FormGroup;
  loading: boolean = false;
  movies!: Array<Movie>;
  directores!: Array<Director>;
  

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private movieService: MovieService, 
     private directorService: DirectorService,
    ) {
  }
  
  getDirectores() {
    this.directorService.getDirectores().subscribe(directores => { this.directores = directores });

  }
 
  getMovies(){
    this.movieService.getMovies().subscribe(movies => { this.movies = movies });

  }
  ngOnInit() {
   
    this.getDirectores();
    
    this.getMovies();
    this.directorForm = this.formBuilder.group({
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
  createDirector(director: Director) {
    console.info("el director  was created: ", this.directores)
    this.directorService.createDirector(director).subscribe(director => {
      console.info("el director was created: ", director)
      this.toastr.success("Confirmation", "Movie created")
      this.directorForm.reset();
    })

  }
  cancelCreation() {
    this.directorForm.reset();
  }
}

