import Wrapper from '../Wrapper';
import Title from '@/components/@common/Modal/Title';
import CloseIcon from '@/assets/images/close_icon.svg';
import styles from './FilterModal.module.css';
import Button from '../Button';
import FilterAddress from './FilterAddress/FilterAddress';

interface Props {
  type: 'filter';
  onAddressClick: (address: string) => void;
  onClick: () => void;
  onClose: () => void;
}

function FilterModal({ type, onAddressClick, onClick, onClose }: Props) {
  return (
    <Wrapper type={type} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Title type={type} />
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <FilterAddress onAddressClick={onAddressClick} />
        <Button type="filter" onClick={onClick} onClose={onClose} />
      </div>
    </Wrapper>
  );
}

export default FilterModal;
