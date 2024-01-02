import Link from 'next/link';
import LogoIcon from '@/assets/images/logo_icon.svg';
import styles from './LogoButton.module.css';

interface Props {
  isSign: boolean;
}

function LogoButton({ isSign }: Props) {
  return (
    <div className={isSign ? styles.login : styles.wrapper}>
      <Link href="/">
        <LogoIcon />
      </Link>
    </div>
  );
}

export default LogoButton;
