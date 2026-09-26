import { ItemCesta } from './item-cesta';
import { PRODUTOS } from '../model/lista-produtos';
import { Produto } from './produto';

interface ItemSalvo {
  codigo: number;
  quantidade: number;
}

export class Cesta {
  itens: ItemCesta[] = [];

  constructor() {
    this.carregar();
  }

  carregar(): void {
    let salvos: ItemSalvo[] = [];
    try {
      salvos = JSON.parse(localStorage.getItem('cesta') || '[]');
    } catch {
      salvos = [];
    }

    const catalogo = new Map(PRODUTOS.map(p => [p.codigo, p]));

    for (const s of salvos) {
      const produto = catalogo.get(s.codigo);
      if (produto) {
        const item = new ItemCesta();
        item.produto = produto;
        item.quantidade = s.quantidade;
        this.itens.push(item);
      }
    }
  }

  salvar(): void {
    const dados: ItemSalvo[] = this.itens.map(item => ({
      codigo: item.produto.codigo,
      quantidade: item.quantidade,
    }));
    try {
      localStorage.setItem('cesta', JSON.stringify(dados));
    } catch {
      // localStorage indisponível (modo privado, quota cheia etc.)
    }
  }

  adicionar(produto: Produto, quantidade: number = 1): void {
    const existente = this.itens.find(i => i.produto.codigo === produto.codigo);

    if (existente) {
      existente.quantidade += quantidade;
    } else {
      const novo = new ItemCesta();
      novo.produto = produto;
      novo.quantidade = quantidade;
      this.itens.push(novo);
    }
    this.salvar();
  }

  aumentar(item: ItemCesta): void {
    item.quantidade++;
    this.salvar();
  }

  diminuir(item: ItemCesta): void {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.salvar();
    } else {
      this.remover(item);
    }
  }

  remover(item: ItemCesta): void {
    const indice = this.itens.indexOf(item);
    if (indice > -1) {
      this.itens.splice(indice, 1);
    }
    this.salvar();
  }

  limpar(): void {
    this.itens = [];
    this.salvar();
  }

  subtotal(item: ItemCesta): number {
    const preco = item.produto.valorPromo ?? item.produto.valor;
    return preco * item.quantidade;
  }

  total(): number {
    return this.itens.reduce((soma, item) => soma + this.subtotal(item), 0);
  }

  quantidadeTotal(): number {
    return this.itens.reduce((soma, item) => soma + item.quantidade, 0);
  }

  vazia(): boolean {
    return this.itens.length === 0;
  }

  get frete(): number {
    if (this.total() >= 80) return 0;
    return 5.00;
  }
}