import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { PRODUTOS } from '../model/lista-produtos';
import { Cesta as CestaModel } from '../model/cesta';

@Component({
  selector: 'app-detalhe',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})
export class Detalhe {
  produto?: Produto;
  quantidadeSelecionada = 1;
  cesta = new CestaModel();

  constructor(private route: ActivatedRoute, private router: Router) {
    const codigo = Number(this.route.snapshot.paramMap.get('codigo'));
    this.produto = PRODUTOS.find(p => p.codigo === codigo);
  }

  aumentarQuantidade(): void {
    if (this.produto && this.quantidadeSelecionada < this.produto.quantidade) {
      this.quantidadeSelecionada++;
    }
  }

  diminuirQuantidade(): void {
    if (this.quantidadeSelecionada > 1) {
      this.quantidadeSelecionada--;
    }
  }

  adicionarECesta(): void {
    if (!this.produto) {
      return;
    }
    this.cesta.adicionar(this.produto, this.quantidadeSelecionada);
    this.router.navigate(['/vitrine'], { queryParams: { adicionado: '1' } });
  }
}
