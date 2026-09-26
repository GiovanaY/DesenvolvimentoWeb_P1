import { Produto } from './produto';

export const PRODUTOS: Produto[] = [
  {
    codigo: 1,
    nome: 'Tartaleta Tropical de Frutas Frescas',
    descritivo: 'Base sablée crocante com creme patissière aveludado, decorada com morango, kiwi e mirtilos frescos.',
    valor: 24.90,
    valorPromo: 22.90,
    quantidade: 0,
    destaque: 1
  },
  {
    codigo: 2,
    nome: 'Caixa de Macarons Sortidos',
    descritivo: 'Caixa elegante com 6 macarons artesanais nos sabores pistáchio, framboesa, limão e baunilha.',
    valor: 92.00,
    valorPromo: 88.50,
    quantidade: 3,
    destaque: 1,
    semGluten: true
  },
  {
    codigo: 3,
    nome: 'Mini Torta de Banana com Caramelo',
    descritivo: 'Camadas de banana caramelizada sobre uma base crocante de biscoito, coberta por um chantilly aveludado e finalizada com raspas de caramelo crocante. Uma combinação perfeita que conquista na primeira mordida e deixa aquele desejo de querer... mais uma.',
    valor: 26.50,
    quantidade: 15,
    destaque: 1,
    semLactose: true
  },
  {
    codigo: 4,
    nome: 'Entremet de Tiramisù Elegance',
    descritivo: 'Camadas delicadas de pão de ló embebido em café e creme leve de mascarpone, polvilhado com cacau puro e finalizado com um grão de café e folha de ouro.',
    valor: 26.90,
    quantidade: 8,
    destaque: 1
  },
  {
    codigo: 5,
    nome: 'Torta Tiramisù Vegana',
    descritivo: 'Deliciosa torta artesanal 100% vegana e sem glúten. Base crocante recheada com creme leve de café, polvilhada com cacau puro e finalizada com um toque de alecrim fresco e folha de ouro.',
    valor: 28.50,
    quantidade: 10,
    destaque: 1,
    semGluten: true,
    semLactose: true
  },
  {
    codigo: 6,
    nome: 'Folhado de Doce de Leite',
    descritivo: 'Massa folhada artesanal extremamente crocante e dourada, recheada com um cremoso e generoso doce de leite.',
    valor: 22.50,
    quantidade: 9,
    destaque: 1,
    semLactose: true
  },
  {
    codigo: 7,
    nome: 'Choux Cream de Pipoca Caramelizada',
    descritivo: 'Massa choux crocante com cobertura craquelin, recheada com um aveludado creme de confeiteiro e decorada com pipocas caramelizadas crocantes.',
    valor: 21.00,
    valorPromo: 19.90,
    quantidade: 0,
    destaque: 1
  },
  {
    codigo: 8,
    nome: 'Cheesecake Clássico de Baunilha',
    descritivo: 'Fatia generosa de cheesecake com textura ultra aveludada e cremosa, sobre uma base crocante de biscoito amor Amoroso e um leve toque de baunilha natural.',
    valor: 25.50,
    quantidade: 6,
    destaque: 1
  },
  {
    codigo: 9,
    nome: 'Brigadeiro Gourmet de Leite Ninho com Nutella',
    descritivo: 'Delicioso brigadeiro artesanal de Leite Ninho extremamente macio e cremoso, finalizado com uma elegante roseta de Nutella pura no topo.',
    valor: 6.50,
    valorPromo: 6.00,
    quantidade: 18,
    destaque: 1,
    semGluten: true
  },
  {
    codigo: 10,
    nome: 'Bolo Drip de Chocolate Branco',
    descritivo: 'Bolo alto e fofinho com cobertura cremosa de chocolate branco, uma elegante calda escorrida (drip) e decorado com raspas delicadas de chocolate branco no topo.',
    valor: 119.90,
    quantidade: 3,
    destaque: 1
  },
  {
    codigo: 11,
    nome: 'Tartaleta Espelhada de Framboesa',
    descritivo: 'Base de massa sablée crocante, coberta com uma elegante mousse com glaçagem espelhada vermelha, recheio cremoso e decorada com framboesa fresca no topo.',
    valor: 23.50,
    quantidade: 7,
    destaque: 1,
    semLactose: true
  },
  {
    codigo: 12,
    nome: 'Tartaleta de Chocolate Intenso',
    descritivo: 'Uma tartaleta sofisticada com base de massa sablée de chocolate crocante, recheada com ganache rica e cremosa, coberta por nuvens de mousse de chocolate polvilhadas com cacau e finalizada com uma escultura artesanal de chocolate amargo.',
    valor: 28.00,
    quantidade: 14,
    destaque: 1,
    semLactose: true
  }
];

export function filtrarProdutos(lista: Produto[], termo: string): Produto[] {
  if (!termo.trim()) {
    return lista;
  }
  const termoBusca = termo.toLowerCase();
  return lista.filter(produto =>
    produto.nome.toLowerCase().includes(termoBusca)
  );
}