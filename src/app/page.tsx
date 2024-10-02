import './style.css';
import './globals.css';
import ProdutoItem from '@/components/produto/ProdutoItem';
// import produtos from "@/core/constants/produtos";
import { produtos } from '@/core';

export default function Inicio() {
  return (
    <div className="-container container">
      {produtos.map(produto => {
        return <ProdutoItem key={produto.id} produto={produto} />;
      })}
    </div>
  );
}
