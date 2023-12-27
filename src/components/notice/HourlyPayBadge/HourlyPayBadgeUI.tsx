import classNames from 'classnames';
import styles from './HourlyPayBadgeUI.module.css';

interface Props {
  averageHourlyPay: number;
  arrow: '↑' | '↓';
  isClosed: boolean;
}

function HourlyPayBadgeUI({ averageHourlyPay, arrow, isClosed }: Props) {
  const dynamicColorClass = averageHourlyPay >= 50 ? styles.red40 : styles.red30;

  const determinedClass = isClosed ? styles.closed : dynamicColorClass;

  return (
    <div className={classNames(styles.wrapper, determinedClass)}>
      기존 시급보다 {averageHourlyPay}% {arrow}
    </div>
  );
}

export default HourlyPayBadgeUI;
