import { Component, OnInit } from '@angular/core';
import { YoutubeTrailersService } from '../youtubeTrailers.service';
import { YoutubeTrailers } from '../youtubeTrailers';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-youtubeTrailer-create',
  templateUrl: './youtubeTrailer-create.component.html',
  styleUrls: ['./youtubeTrailer-create.component.css']
})
export class YoutubeTrailerCreateComponent implements OnInit {
  trailerForm!: FormGroup;
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private youtubeTrailersService: YoutubeTrailersService) { }

  ngOnInit() {
    this.trailerForm = this.formBuilder.group({
      channel: ["", [Validators.required, Validators.minLength(2)]],
      duration: ["", Validators.required],
      url: ["", [Validators.required, Validators.minLength(2)]],
      name: ["", [Validators.required, Validators.minLength(2)]],
      id: ["", [Validators.required, Validators.minLength(32), Validators.pattern("[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9]")]]

    })

  }


  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
  createTrailer(trailer: YoutubeTrailers) {

    this.youtubeTrailersService.createTrailer(trailer).subscribe(trailer => {
      console.info("The Trailer was created: ", trailer)
      this.toastr.success("Confirmation", "Trailer created")
      this.trailerForm.reset();
    })

  }
  cancelCreation() {
    this.trailerForm.reset();
  }
}
