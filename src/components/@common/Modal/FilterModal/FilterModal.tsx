import Wrapper from '../Wrapper';
import Title from '@/components/@common/Modal/Title';
import CloseIcon from '@/assets/images/close_icon.svg';
import styles from './FilterModal.module.css';

interface Props {
  type: 'filter';
  onClose: () => void;
}

function FilterModal({ type, onClose }: Props) {
  return (
    <Wrapper type={type} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Title type={type} />
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default FilterModal;
