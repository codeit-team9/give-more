import ActiveIcon from '@/assets/images/notification_on_icon.svg';
import InactiveIcon from '@/assets/images/notification_off_icon.svg';
import styles from '@/components/@common/NotificationButton/NotificationButton.module.css';

interface Props {
  active: boolean;
}

function NotificationButton({ active }: Props) {
  return <div className={styles.wrapper}>{active ? <InactiveIcon /> : <ActiveIcon />}</div>;
}

export default NotificationButton;
