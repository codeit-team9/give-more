import FilterSectionName from '../FilterSection/FilterSectionName';
import styles from './FilterStartsAt.module.css';
import DateInput from '@/components/@common/Input/DateInput';

interface Props {
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
}

function FilterStartsAt({ startsAt, setStartsAt }: Props) {
  return (
    <div className={styles.wrapper}>
      <FilterSectionName>시작일</FilterSectionName>
      <DateInput startsAt={startsAt} setStartsAt={setStartsAt} />
    </div>
  );
}

export default FilterStartsAt;
