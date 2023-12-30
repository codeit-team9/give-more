import Link from 'next/link';
import LogoIcon from '@/assets/images/logo_icon.svg';
import styles from './LogoButton.module.css';

function LogoButton() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <LogoIcon />
      </Link>
    </div>
  );
}

export default LogoButton;
