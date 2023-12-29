import classnames from 'classnames';
import styles from './Button.module.css';

interface Props {
  type: 'confirm' | 'select' | 'login';
  onClick: () => void;
  onClose: () => void;
}

function Button({ type, onClick, onClose }: Props) {
  const handleCloseModal = () => {
    onClose();
  };

  const handleConfirm = () => {
    onClick();
    onClose();
  };

  return type === 'confirm' ? (
    <button className={styles.button} type="button" onClick={handleConfirm}>
      확인
    </button>
  ) : (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={handleCloseModal}>
        {type === 'select' ? '아니요' : '취소'}
      </button>
      <button className={classnames(styles.button, styles.confirm)} type="button" onClick={handleConfirm}>
        {type === 'select' ? '확인' : '로그인 하기'}
      </button>
    </div>
  );
}

export default Button;
