'use client';
import useProdutos from '@/data/hooks/useProdutos';

export default function PaginaProduto(props: any) {
  const { produtos } = useProdutos();

  const id = Number(props.params.id);

  const produto = produtos.find(p => p.id === id);
  return produto ? produto.nome : <h1>Produto indefinido</h1>;
}
