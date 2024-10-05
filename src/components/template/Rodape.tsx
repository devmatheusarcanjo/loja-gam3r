import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Logo from '../shared/logo';

import styles from './css/footer.module.css';

console.log(styles.footer);

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.barra}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.sessao_links}>
          <div>
            <Logo></Logo>
          </div>
          <ul>
            <h1>Sobre</h1>
            <li>Nossa História</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
          <ul>
            <h1>Contato</h1>
            <li>Nossa História</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
        <div className={styles.decidindoNome}>
          <div className={styles.container_icones}>
            <IconBrandYoutube size={28} stroke={1} />
            <IconBrandInstagram size={28} stroke={1} />
            <IconBrandLinkedin size={28} stroke={1} />
            <IconBrandFacebook size={28} stroke={1} />
            <IconBrandInstagram size={28} stroke={1} />
          </div>
          <div>
            <span>
              Feito com ❤️ em {new Date().getFullYear()} - Todos os direitos
              reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
