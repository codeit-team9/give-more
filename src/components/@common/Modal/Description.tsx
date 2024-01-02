import { ReactNode } from 'react';
import styles from './Description.module.css';

interface Props {
  children: ReactNode;
}

function Description({ children }: Props) {
  return <p className={styles.description}>{children}</p>;
}
export default Description;
