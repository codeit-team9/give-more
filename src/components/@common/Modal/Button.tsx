import classnames from 'classnames';
import styles from './Button.module.css';

interface Props {
  type: 'base' | 'signin' | 'filter';
  onClick: () => void;
  onClose?: () => void;
  onReset?: () => void;
}

function Button({ type, onClick, onClose, onReset }: Props) {
  const handleCloseModal = () => {
    if (type === 'filter' && onReset) {
      onReset();
      return;
    }

    if (onClose) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onClose) {
      onClick();
      onClose();
    }
  };

  const renderButtonText = () => {
    switch (type) {
      case 'signin':
        return ['취소', '로그인 하기'];
      case 'filter':
        return ['초기화', '적용하기'];
      default:
        return ['확인'];
    }
  };

  const [cancelText, confirmText] = renderButtonText();

  const isBaseType = type === 'base';
  const isSignInType = type === 'signin';
  const isFilterType = type === 'filter';

  let cancelButtonText = cancelText;
  let confirmButtonText = confirmText;

  if (isSignInType) {
    cancelButtonText = '취소';
    confirmButtonText = '로그인 하기';
  }

  return isBaseType ? (
    <button className={styles.button} type="button" onClick={handleConfirm}>
      확인
    </button>
  ) : (
    <div className={classnames(styles.wrapper, isFilterType && styles.filter)}>
      <button
        className={classnames(styles.button, isFilterType && styles.filter)}
        type="button"
        onClick={handleCloseModal}
      >
        {cancelButtonText}
      </button>
      <button
        className={classnames(styles.button, styles.confirm, isFilterType && styles.filter)}
        type="button"
        onClick={handleConfirm}
      >
        {confirmButtonText}
      </button>
    </div>
  );
}

export default Button;
