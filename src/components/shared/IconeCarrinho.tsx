import { IconShoppingCart } from '@tabler/icons-react';
import './css/style.css';

export default function IconeCarrinho(props: any) {
  return (
    <div className="-componente-icone">
      <IconShoppingCart size={30} stroke={1.3} />

      <div className="-numero-quantidade-carrinho bg-pink-500">
        {props.quantidade ?? 0}
      </div>
    </div>
  );
}
