import { ReactNode } from 'react';
import { Notice } from '@/@types/notice.types';
import NoticeList from '../NoticeList/NoticeList';
import styles from './NoticeEntire.module.css';

interface Props {
  items?: Notice[];
  children: ReactNode;
}

function NoticeEntire({ items, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionName}>전체 공고</h2>
        {children}
      </div>
      <NoticeList type="entire" items={items} count={6} />
    </div>
  );
}

export default NoticeEntire;
