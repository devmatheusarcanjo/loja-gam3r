'use client';

import { Produto } from '@/core';
import Link from 'next/link';
import Image from 'next/link';
import './css/style.css';
import React from 'react';
import { IconShoppingCart } from '@tabler/icons-react';

export interface ProdutoProps {
  produto: Produto;
}

export default function ProdutoItem(props: ProdutoProps) {
  const produto = props.produto;
  const { especificacoes } = produto;

  const tratarMoeda = React.useCallback((valor: number | string): string => {
    valor = typeof valor === 'string' ? `${valor}` : valor;

    return valor.toLocaleString('BRL', { style: 'currency', currency: 'BRL' });
  }, []);

  const carrinho = React.useRef(null);

  const animacaoCarrinho = React.useCallback(
    (valor: boolean) => {
      if (carrinho.current) {
        if (valor) carrinho.current.classList.add('-carrinho-hover');
        else carrinho.current.classList.remove('-carrinho-hover');
      }
    },
    [carrinho]
  );

  return (
    <Link href={`/produto/${produto.id}`} className="-produto">
      <div>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="-imagem"
          style={{ width: '100%' }}
        />
      </div>
      <div className="-infos">
        <div className="-detalhes">
          <span className="-nome-produto">{produto.nome}</span>
          <span className="-destaque">{especificacoes.destaque} </span>
        </div>
        <div className="-espaco-para-padronizar-a-posicao-dos-precos"></div>
        <div className="-preco">
          <span className="-valor-base">
            de {tratarMoeda(produto.precoBase)}
          </span>
          <span className="-valor-promocional">
            por {tratarMoeda(produto.precoPromocional)}
          </span>
        </div>

        <button
          className="-botao"
          onMouseOver={() => animacaoCarrinho(true)}
          onMouseOut={() => animacaoCarrinho(false)}
          onClick={(event: any) => {
            event.preventDefault();

            console.log('botao clicado');
          }}
        >
          <span className="-texto-botao">Adicionar</span>
          <IconShoppingCart
            ref={carrinho}
            className="-icone-carrinho"
            size={20}
          />
        </button>
      </div>
    </Link>
  );
}

const apagar = {
  id: 18,

  nome: 'Headset Gamer HyperX Cloud II',
  descricao:
    'O HyperX Cloud II é um headset projetado para máximo conforto e qualidade de som. Possui drivers de 53mm e som surround virtual 7.1, ideal para gamers que buscam imersão completa em jogos.',
  marca: 'HyperX',
  modelo: 'KHX-HSCP-RD',
  imagem:
    'https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-gamer-hyperx-cloud-II.png?alt=media&token=82dce4ef-75c7-4c75-9e1a-ccf20aac1af7',
  nota: 4.8,
  videoReview: 'https://www.youtube.com/embed/BT6NFjvRNu0',
  tags: ['Confortável', 'Surround 7.1', 'Microfone Removível'],
  precoBase: 899.99,
  precoPromocional: 699.99,
  menorPreco: 649.99,
  maiorPreco: 949.99,
  precoMedio: 799.99,
  especificacoes: {
    destaque: 'Surround Virtual 7.1',
    Drivers: '53mm',
    Conectividade: 'USB / P2 3.5mm',
    Microfone: 'Removível com cancelamento de ruído',
    Compatibilidade: 'PC, PS4, Xbox One',
    peso: '320 g',
  },
};
