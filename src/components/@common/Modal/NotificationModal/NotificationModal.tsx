import Wrapper from '@/components/@common/Modal/Wrapper';
import Title from '@/components/@common/Modal/Title';
import styles from './NotificationModal.module.css';
import NotificationList from './NotificationList/NotificationList';
import { Items } from '@/@types/notification.type';
import CloseIcon from '@/assets/images/close_icon.svg';

interface Props {
  type: 'notification';
  count: number;
  data: Items;
  onClose: () => void;
}

function NotificationModal({ type, count, data, onClose }: Props) {
  return (
    <Wrapper type={type} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Title type={type} count={count} />
          <button className={styles.closeButton} type="button" onClick={onClose} aria-label="닫기">
            <CloseIcon />
          </button>
        </div>
        <div className={styles.cardContainer}>
          <NotificationList data={data} />
        </div>
      </div>
    </Wrapper>
  );
}

export default NotificationModal;
