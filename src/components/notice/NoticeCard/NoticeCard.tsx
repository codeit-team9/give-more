import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import PostCardDescription from './NoticeCardDescription';
import HourlyPayBadge from '@/components/notice/HourlyPayBadge/HourlyPayBadge';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import styles from './NoticeCard.module.css';

interface Props {
  noticeId: string;
  shopId: string;
  cardImageUrl: string;
  restaurantName: string;
  duration: string;
  address: string;
  defaultHourlyPay: number;
  currentHourlyPay: number;
  isClosed: boolean;
}

function NoticeCard({
  noticeId,
  shopId,
  cardImageUrl,
  restaurantName,
  duration,
  address,
  defaultHourlyPay,
  currentHourlyPay,
  isClosed,
}: Props) {
  const closedNoticeClass = isClosed && styles.lastNotice;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Link href={`/notice?shopId=${shopId}&noticeId=${noticeId}`}>
          <Image
            fill
            className={classNames(styles.cardImage, closedNoticeClass)}
            src={cardImageUrl}
            alt={restaurantName}
          />
        </Link>
        {isClosed && <p className={styles.lastNotice}>지난 공고</p>}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.descriptionContainer}>
          <Link href={`/shop/${shopId}`}>
            <h2 className={classNames(styles.restaurantName, closedNoticeClass)}>{restaurantName}</h2>
          </Link>
          <Link href={`/notice?shopId=${shopId}&noticeId=${noticeId}`}>
            <PostCardDescription type="duration" description={duration} isClosed={isClosed} />
            <PostCardDescription type="address" description={address} isClosed={isClosed} />
          </Link>
        </div>
        <div className={styles.hourlyPayContainer}>
          <h2 className={classNames(styles.hourlyPay, closedNoticeClass)}>{separatorHourlyPay(currentHourlyPay)}원</h2>
          <HourlyPayBadge defaultHourlyPay={defaultHourlyPay} currentHourlyPay={currentHourlyPay} isClosed={isClosed} />
        </div>
      </div>
    </div>
  );
}

export default NoticeCard;
