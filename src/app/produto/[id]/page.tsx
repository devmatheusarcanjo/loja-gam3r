import { produtos } from "@/core";
import { Produto } from "@/core";
import ProdutoItem from "@/components/produto/ProdutoItem";

export default function PaginaProduto(props: any) {
  const id = Number(props.params.id);
  const produto = produtos.find(p => p.id === id);
  return produto ? produto.nome : <h1>Produto indefinido</h1>

}