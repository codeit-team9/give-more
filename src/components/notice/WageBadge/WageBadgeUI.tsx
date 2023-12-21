import classNames from 'classnames';
import styles from './WageBadgeUI.module.css';

interface Props {
  averageWage: number;
  cursor: '↑' | '↓';
}

function WagebadgeUI({ averageWage, cursor }: Props) {
  const dynamicColorClass = averageWage >= 50 ? styles.red40 : styles.red30;

  return (
    <div className={classNames(styles.wrapper, dynamicColorClass)}>
      기존 시급보다 {averageWage}% {cursor}
    </div>
  );
}

export default WagebadgeUI;
