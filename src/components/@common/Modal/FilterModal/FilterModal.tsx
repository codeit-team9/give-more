import Wrapper from '../Wrapper';
import Title from '@/components/@common/Modal/Title';
import CloseIcon from '@/assets/images/close_icon.svg';
import styles from './FilterModal.module.css';
import Button from '../Button';
import FilterAddress from './FilterAddress/FilterAddress';
import { Address } from '@/@types/address.types';
import FilterStartsAt from './FilterStartsAt/FilterStartsAt';
import HorizontalLine from './HorizontalLine/HorizontalLine';
import FilterHourlyPay from './FilterHourlPay/FilterHourlPay';

interface Props {
  type: 'filter';
  addressList: Address[];
  onAddressClick: (address: Address) => void;
  onBadgeClick: (address: Address) => void;
  hourlyPay: number;
  setHourlyPay: (hourlyPay: number) => void;
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
  resetFilter: () => void;
  onClick: () => void;
  onClose: () => void;
}

function FilterModal({
  type,
  addressList,
  onAddressClick,
  onBadgeClick,
  hourlyPay,
  setHourlyPay,
  startsAt,
  setStartsAt,
  resetFilter,
  onClick,
  onClose,
}: Props) {
  return (
    <Wrapper type={type} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Title type={type} />
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <FilterAddress addressList={addressList} onAddressClick={onAddressClick} onBadgeClick={onBadgeClick} />
        <HorizontalLine />
        <FilterStartsAt startsAt={startsAt} setStartsAt={setStartsAt} />
        <HorizontalLine />
        <FilterHourlyPay hourlyPay={hourlyPay} setHourlyPay={setHourlyPay} />
        <Button type="filter" onClick={onClick} onClose={onClose} onReset={resetFilter} />
      </div>
    </Wrapper>
  );
}

export default FilterModal;
