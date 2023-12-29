import Wrapper from '@/components/@common/Modal/Wrapper';
import Title from '@/components/@common/Modal/Title';
import styles from './NotificationModal.module.css';
import NotificationList from './NotificationList/NotificationList';
import { Items } from '@/types/notification.type';

interface Props {
  type: 'notification' | 'filter';
  data: Items;
  onClose: () => void;
}

function NotificationModal({ type, data, onClose }: Props) {
  return (
    <Wrapper type={type} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Title type={type} count={8} />
          <button className={styles.closeButton} type="button" onClick={onClose}>
            X
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
