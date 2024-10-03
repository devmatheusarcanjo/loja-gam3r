import IconeCarrinho from '../shared/IconeCarrinho';
import Logo from '../shared/logo';
import './css/cabecalho.css';

export default function Cabecalho() {
  return (
    <header className="-componente-cabecalho">
      <div className="-sub-container container">
        <Logo></Logo>
        <IconeCarrinho></IconeCarrinho>
      </div>
    </header>
  );
}
