import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { PRODUTOS, filtrarProdutos } from '../model/lista-produtos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine implements OnInit {
  termoPesquisa: string = '';
  lista: Produto[] = PRODUTOS;
  mostrarAviso = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('adicionado')) {
        this.mostrarAviso = true;
        this.router.navigate([], { queryParams: {}, replaceUrl: true });
      }
    });
  }

  get produtosFiltrados(): Produto[] {
    return filtrarProdutos(this.lista, this.termoPesquisa);
  }
}