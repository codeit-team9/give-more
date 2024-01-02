import { ReactNode } from 'react';
import styles from './FilterSectionName.module.css';

interface Props {
  children: ReactNode;
}

function FilterSectionName({ children }: Props) {
  return <h2 className={styles.name}>{children}</h2>;
}

export default FilterSectionName;
