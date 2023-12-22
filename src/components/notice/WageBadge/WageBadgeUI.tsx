import classNames from 'classnames';
import styles from './WageBadgeUI.module.css';

interface Props {
  averageWage: number;
  arrow: '↑' | '↓';
  isClosed: boolean;
}

function WagebadgeUI({ averageWage, arrow, isClosed }: Props) {
  const dynamicColorClass = averageWage >= 50 ? styles.red40 : styles.red30;
  const determinedClass = isClosed ? styles.closed : dynamicColorClass;

  return (
    <div className={classNames(styles.wrapper, determinedClass)}>
      기존 시급보다 {averageWage}% {arrow}
    </div>
  );
}

export default WagebadgeUI;
