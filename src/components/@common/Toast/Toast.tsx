import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

interface Props {
  type: 'accepted' | 'rejected';
}

function Toast({ type }: Props) {
  const [isActive, setIsActive] = useState(false);
  let content = '';

  switch (type) {
    case 'accepted':
      content = '등록 되었습니다.';
      break;
    case 'rejected':
      content = '거절 되었습니다.';
      break;
    default:
      break;
  }

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <div className={styles.wrapper}>{isActive && content}</div>;
}

export default Toast;
