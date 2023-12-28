import React from 'react';
import styles from './ApplyHistory.module.css';

interface Props {
  shop: string;
  date: string;
  hourlyPay: string;
  status?: Status;
}

type Status = 'pending' | 'accept' | 'reject';

function ApplyHistory({ shop, date, hourlyPay, status }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.shop}>{shop}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.hourlyPay}>{hourlyPay}</div>
      <div className={styles.status}>
        <div>{status}</div>
      </div>
    </div>
  );
}

export default ApplyHistory;
