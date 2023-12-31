import { ChangeEvent } from 'react';
import classNames from 'classnames';
import convertDate from '@/utils/convertDate';
import styles from './DateInput.module.css';

interface Props {
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
}

function DateInput({ startsAt, setStartsAt }: Props) {
  const minDateTime = convertDate(new Date()).slice(0, 16);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartsAt(convertDate(new Date(event.target.value)));
  };

  return (
    <div className={classNames(styles.wrapper, styles.date)}>
      <p className={styles.name}>시작 일시</p>
      <input
        className={styles.input}
        placeholder="선택"
        type="datetime-local"
        value={startsAt.slice(0, 16)}
        min={minDateTime}
        onChange={handleChange}
      />
    </div>
  );
}

export default DateInput;
