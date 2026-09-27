import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cesta as CestaModel } from '../model/cesta';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  cesta = new CestaModel();
}
