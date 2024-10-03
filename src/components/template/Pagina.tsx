import Cabecalho from './Cabecalho';

export default function Pagina(props: any) {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <main className="container">{props.children}</main>
    </div>
  );
}
