/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MouseEvent, ReactNode, useRef } from 'react';
import styles from './Wrapper.module.css';

interface Props {
  type?: 'notification' | 'filter';
  onClose: () => void;
  children: ReactNode;
}

function Wrapper({ type, onClose, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(event.target as Node)) onClose();
  };

  return (
    <div className={type ? styles.notificationWrapper : styles.wrapper} onClick={handleOutsideClick}>
      <div className={type === 'notification' ? styles.notification : styles.container} ref={ref}>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
