import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.html',
  styleUrls: ['./finalizar-compra.css'],
  imports: [CommonModule, RouterLink, FormsModule]
})
export class FinalizarCompra {

  metodoPagamento: string = 'pix';
  cesta = new Cesta();

  constructor(private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    this.cesta.limpar();
    this.router.navigate(['vitrine']);
  }
}