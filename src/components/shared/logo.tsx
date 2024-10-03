import Image from 'next/image';
import Link from 'next/link';
import './css/style.css';

export default function Logo() {
  return (
    <Link href="/" className="-componente-logo">
      <Image src="/logo.png" alt="Logo" height={60} width={60}></Image>
      <Image
        src="/logo-texto.png"
        alt="Logo texto"
        height={0}
        width={230}
      ></Image>
    </Link>
  );
}
