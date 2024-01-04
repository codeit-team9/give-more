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

  const wrapperClassName = (() => {
    switch (type) {
      case 'notification':
        return styles.notificationWrapper;
      case 'filter':
        return styles.filterWrapper;
      default:
        return styles.wrapper;
    }
  })();

  const containerClassName = (() => {
    switch (type) {
      case 'notification':
        return styles.notificationContainer;
      case 'filter':
        return styles.filterContainer;
      default:
        return styles.container;
    }
  })();

  return type !== 'filter' && type !== 'notification' ? (
    <div className={wrapperClassName} onClick={handleOutsideClick}>
      <div className={containerClassName} ref={ref}>
        {children}
      </div>
    </div>
  ) : (
    <div className={containerClassName} ref={ref}>
      {children}
    </div>
  );
}

export default Wrapper;
