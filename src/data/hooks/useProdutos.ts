import ProdutoItem from '@/components/produto/ProdutoItem';
import { Produto, produtos } from '@/core';
import React from 'react';

export default function useProdutos() {
  const [produtos, setProdutos] = React.useState<Produto[]>([]);

  async function obterProdutos() {
    return fetch(process.env.NEXT_PUBLIC_API_URL + 'produtos')
      .then(response => response.json())
      .catch(erro => {
        return [];
      });
  }

  React.useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return {
    produtos,
  };
}
