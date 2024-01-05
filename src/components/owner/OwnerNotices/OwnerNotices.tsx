import NoticeList from '@/components/notice/NoticeList/NoticeList';
import styles from './OwnerNotices.module.css';
import { NoticeData } from '@/@types/notice.types';

interface Props {
  notice?: NoticeData;
  shopId: string;
  imageUrl: string;
  name: string;
  address1: string;
  originalHourlyPay: number;
}

function OwnerNotices({ notice, shopId, imageUrl, name, address1, originalHourlyPay }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.sectionName}>내가 등록한 공고</h2>
        <NoticeList
          type="owner"
          count={6}
          items={notice?.items}
          imageUrl={imageUrl}
          name={name}
          address1={address1}
          originalHourlyPay={originalHourlyPay}
          shopId={shopId}
        />
      </div>
    </div>
  );
}

export default OwnerNotices;
