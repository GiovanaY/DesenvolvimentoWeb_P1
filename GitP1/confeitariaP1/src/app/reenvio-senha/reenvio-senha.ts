import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-reenvio-senha',
  styleUrl: './reenvio-senha.css',
  templateUrl: './reenvio-senha.html',
})
export class ReenvioSenha {
  constructor(private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    this.router.navigate(['/login']);
  }
}
