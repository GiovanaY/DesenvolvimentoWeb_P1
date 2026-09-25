import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-reenvio-senha',
  styleUrl: './reenvio-senha.css',
  templateUrl: './reenvio-senha.html',
})
export class ReenvioSenha {
  linkEnviado = false;

  constructor(private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    this.linkEnviado = true;
  }
}