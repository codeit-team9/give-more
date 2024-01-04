import { getRecentNotices } from '@/utils/noticeRecentViewed';
import NoticeList from '../NoticeList/NoticeList';
import styles from './NoticeRecentViewed.module.css';

function NoticeRecentViewed() {
  const items = getRecentNotices();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionName}>최근에 본 공고</h2>
      <NoticeList type="entire" count={6} items={items} />
    </div>
  );
}

export default NoticeRecentViewed;
