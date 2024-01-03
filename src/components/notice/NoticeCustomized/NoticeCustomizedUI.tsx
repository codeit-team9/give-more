/* eslint-disable jsx-a11y/no-static-element-interactions */
import { LegacyRef, MouseEvent, ReactNode } from 'react';
import styles from './NoticeCustomizedUI.module.css';

interface Props {
  containerRef: LegacyRef<HTMLDivElement>;
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseEnter: () => void;
  children: ReactNode;
}

function NoticeCustomizedUI({
  containerRef,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
  onMouseMove,
  onMouseEnter,
  children,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionName}>맞춤 공고</h2>
      </div>
      <div
        ref={containerRef}
        className={styles.cardsContainer}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </div>
    </div>
  );
}
export default NoticeCustomizedUI;
