import { useEffect, useState } from 'react';
import styles from './DetailFilterButton.module.css';

interface Props {
  count: number | null;
  onClick: () => void;
}

function DetailFilterButton({ count, onClick }: Props) {
  const [filteredCount, setFilteredCount] = useState<number | null>(count);

  useEffect(() => {
    setFilteredCount(count);
  }, [count]);

  return (
    <button className={styles.button} type="button" onClick={onClick}>
      상세 필터{filteredCount !== null && filteredCount > 0 && ` (${filteredCount})`}
    </button>
  );
}

export default DetailFilterButton;
