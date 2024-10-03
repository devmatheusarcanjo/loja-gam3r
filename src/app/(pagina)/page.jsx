'use client';

import '../style.css';
import '../globals.css';
import ProdutoItem from '@/components/produto/ProdutoItem';
import React from 'react';
import useProdutos from '@/data/hooks/useProdutos';

export default function Inicio() {
  const { produtos } = useProdutos();

  return (
    <div className="-container container">
      {produtos
        ? produtos.map(produto => {
            return <ProdutoItem key={produto.id} produto={produto} />;
          })
        : 'Carregando'}
    </div>
  );
}
