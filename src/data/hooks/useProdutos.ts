'use client';

import { Produto } from '@/core';
import React from 'react';

export default function useProdutos() {
  const [produtos, setProdutos] = React.useState<Produto[]>([]);

  async function obterProdutos(): Promise<Produto[]> {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}produtos`)
      .then(response => response.json())
      .catch(erro => {
        return [];
      });
  }

  async function obterProdutoPorId(id: number): Promise<Produto | null> {
    const resultado = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}produtos/${id}`
    )
      .then(response => response.json())
      .catch(e => {
        return null;
      });

    console.log(resultado);
    return resultado;
  }

  React.useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return {
    produtos,
    obterProdutoPorId,
  };
}
