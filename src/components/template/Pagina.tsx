import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import styles from './css/pagina.module.css';

export interface PaginaProps {
  className?: string;
  children: any;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className={styles.tudo}>
      <div className={`${styles.tudo} ${styles.background}`}>
        <Cabecalho></Cabecalho>
        <main className={`container ${styles.main} ${props.className}`}>
          {props.children}
        </main>
        <Rodape></Rodape>
      </div>
    </div>
  );
}
