import ADDRESS from '@/constants/ADDRESS';
import styles from './FilterAddress.module.css';
import { Address } from '@/@types/address.types';
import FilterAddressBadge from '../FilterAddressBadge/FilterAddressBadge';
import FilterSection from '../FilterSection/FilterSectionName';

interface Props {
  addressList: Address[];
  onAddressClick: (address: Address) => void;
  onBadgeClick: (address: Address) => void;
}

function FilterAddress({ addressList, onAddressClick, onBadgeClick }: Props) {
  const handleAddressClick = (address: Address) => {
    onAddressClick(address);
  };

  return (
    <div className={styles.wrapper}>
      <FilterSection>위치</FilterSection>
      <ul className={styles.addressContainer}>
        {ADDRESS.map((value) => (
          <li className={styles.address} key={value}>
            <button type="button" onClick={() => handleAddressClick(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.addressBadgeContainer}>
        {addressList.map((address) => {
          return (
            <li key={address}>
              <FilterAddressBadge address={address} onClick={onBadgeClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterAddress;
