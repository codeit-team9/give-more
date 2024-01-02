import { ChangeEvent } from 'react';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import deSeparatorHourlyPay from '@/utils/deSeparatorHourlyPay';
import styles from './FilterHourlPay.module.css';
import FilterSectionName from '../FilterSection/FilterSectionName';

interface Props {
  hourlyPay: number;
  setHourlyPay: (hourlyPay: number) => void;
}

function FilterHourlyPay({ hourlyPay, setHourlyPay }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newValue = inputValue ? deSeparatorHourlyPay(inputValue) : 0;
    const HOURLY_PAY_LIMIT = 1000000000;

    if (newValue > HOURLY_PAY_LIMIT) {
      setHourlyPay(HOURLY_PAY_LIMIT);
      return;
    }

    setHourlyPay(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <FilterSectionName>금액</FilterSectionName>
      <div className={styles.container}>
        <input className={styles.input} value={separatorHourlyPay(hourlyPay)} onChange={handleChange} />
        <p className={styles.won}>원</p>
        <p className={styles.description}>이상부터</p>
      </div>
    </div>
  );
}

export default FilterHourlyPay;
