import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  imports: [RouterLink, FormsModule]
})
export class Cadastro {

  constructor(private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    this.router.navigate(['vitrine']);
  }
}