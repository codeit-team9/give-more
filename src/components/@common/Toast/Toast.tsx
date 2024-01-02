import { TOAST_MESSAGE } from '@/constants/TOAST';
import styles from './Toast.module.css';

interface Props {
  type: 'accepted' | 'modified' | 'applied' | 'canceled' | 'password' | 'email' | 'error' | 'signed';
}

function Toast({ type }: Props) {
  const content = TOAST_MESSAGE[type].message;

  return <div className={styles.wrapper}>{content}</div>;
}

export default Toast;
