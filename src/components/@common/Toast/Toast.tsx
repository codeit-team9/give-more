import { useEffect, useState } from 'react';
import { TOAST_MESSAGE } from '@/constants/TOAST';
import styles from './Toast.module.css';

interface Props {
  type: 'accepted' | 'modified' | 'applied' | 'canceled';
}

function Toast({ type }: Props) {
  const [isActive, setIsActive] = useState(false);
  const content = TOAST_MESSAGE[type].message;

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isActive && <div className={styles.wrapper}>{content}</div>;
}

export default Toast;
