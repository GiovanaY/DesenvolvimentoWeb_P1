export class Produto {
  codigo!: number;
  nome!: string;
  descritivo!: string;
  valor!: number;
  valorPromo?: number;
  quantidade!: number;
  destaque!: number;
  semGluten?: boolean;
  semLactose?: boolean;
}