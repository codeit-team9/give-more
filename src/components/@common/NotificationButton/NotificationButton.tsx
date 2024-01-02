import ActiveIcon from '@/assets/images/notification_on_icon.svg';
import InactiveIcon from '@/assets/images/notification_off_icon.svg';
import styles from '@/components/@common/NotificationButton/NotificationButton.module.css';

interface Props {
  active: boolean;
  onClick: () => void;
}

function NotificationButton({ active, onClick }: Props) {
  return (
    <button className={styles.wrapper} type="button" onClick={onClick}>
      {active ? <InactiveIcon /> : <ActiveIcon />}
    </button>
  );
}

export default NotificationButton;
