import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Genre } from "../genero"
import { ToastrService } from 'ngx-toastr';
import { GeneroService } from '../genero.service';



@Component({
  selector: 'app-genero-create',
  templateUrl: './genero-create.component.html',
  styleUrls: ['./genero-create.component.css']
})
export class GeneroCreateComponent implements OnInit {
  generoForm!: FormGroup;
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private generoService: GeneroService) { }

  ngOnInit() {
    this.generoForm = this.formBuilder.group({
      type: ["", [Validators.required, Validators.minLength(2)]],
      id: ["", [Validators.required, Validators.minLength(32), Validators.pattern("[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9-]*[a-z0-9]")]]

    })

  }


  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
  createGenero(genero: Genre) {
   
    this.generoService.createGeneros(genero).subscribe(genero => {
      console.info("The Genero was created: ", genero)
      this.toastr.success("Confirmation", "Genero created")
      this.generoForm.reset();
    })
    
  }
  cancelCreation() {
    this.generoForm.reset();
  }
}
