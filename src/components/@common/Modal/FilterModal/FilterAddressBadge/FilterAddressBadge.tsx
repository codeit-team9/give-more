import { Address } from '@/@types/address.types';
import styles from './FilterAddressBadge.module.css';
import CloseIcon from '@/assets/images/close_primary_icon.svg';

interface Props {
  address: Address;
  onClick: (address: Address) => void;
}

function FilterAddressBadge({ address, onClick }: Props) {
  return (
    <div className={styles.badge}>
      <p className={styles.address}>{address}</p>
      <button type="button" onClick={() => onClick(address)}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default FilterAddressBadge;
