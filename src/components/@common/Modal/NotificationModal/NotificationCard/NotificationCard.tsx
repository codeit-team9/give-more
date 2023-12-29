import RedIcon from '@/assets/images/ellipse_red_icon.svg';
import BlueIcon from '@/assets/images/ellipse_blue_icon.svg';
import calculateTimeDifference from '@/utils/calculateTimeDifference';
import styles from './NotificationCard.module.css';

interface Props {
  status: 'accepted' | 'rejected';
  restaurantName: string;
  startsAt: string;
  workHour: number;
  createdAt: string;
}

function NotificationCard({ status, restaurantName, startsAt, workHour, createdAt }: Props) {
  const formattedTime = `${startsAt} (${workHour})`; // 추후 수정
  const formattedCreatedAt = calculateTimeDifference(createdAt);
  const formattedStatus = status === 'accepted' ? '승인' : '거절';
  const formattedStatusClass = status === 'accepted' ? styles.accept : styles.rejected;

  return (
    <div className={styles.wrapper}>
      {status === 'accepted' ? <BlueIcon /> : <RedIcon />}
      <h2 className={styles.description}>
        {restaurantName}({formattedTime}) 공고 지원이 <span className={formattedStatusClass}>{formattedStatus}</span>
        되었어요.
      </h2>
      <p className={styles.timeDiff}>{formattedCreatedAt}</p>
    </div>
  );
}

export default NotificationCard;
