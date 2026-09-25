import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.html',
  styleUrls: ['./contato.css'],
  imports: [RouterLink, FormsModule]
})
export class Contato {

  constructor(private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    window.location.reload();
  }
}