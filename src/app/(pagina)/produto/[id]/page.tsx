'use client';

import useProdutos from '@/data/hooks/useProdutos';
import { Produto } from '@/core';
import React from 'react';

export default function PaginaProduto(props: any) {
  const id = Number(props.params.id);

  const { obterProdutoPorId } = useProdutos();
  const [produto, setProduto] = React.useState<Produto | null>(null);

  React.useLayoutEffect(() => {
    obterProdutoPorId(id).then(setProduto);
  }, [props.params.id]);

  const produtoJson = JSON.stringify(produto);
  return produto ? <div>{produtoJson}</div> : <h1>Produto Não encontro</h1>;
}
