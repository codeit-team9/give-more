import React from 'react';
import styles from './ApplyHistory.module.css';
import ApplyHistory from './ApplyHistory';

function ApplyHistoryUi() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.shop}>가게</div>
        <div className={styles.date}>일자</div>
        <div className={styles.hourlyPay}>시급</div>
        <div className={styles.status}>상태</div>
      </div>
      <div>
        <ApplyHistory shop="shop" date="2023-01-12 10:00 ~ 12:00 (2시간)" hourlyPay="15,000원" status="pending" />
        <ApplyHistory shop="shop" date="2023-01-12 10:00 ~ 12:00 (2시간)" hourlyPay="15,000원" status="accept" />
        <ApplyHistory shop="shop" date="2023-01-12 10:00 ~ 12:00 (2시간)" hourlyPay="15,000원" status="reject" />
        <ApplyHistory shop="shop" date="2023-01-12 10:00 ~ 12:00 (2시간)" hourlyPay="15,000원" status="pending" />
      </div>
      <div className={styles.pagenation}>pagenation button</div>
    </div>
  );
}

export default ApplyHistoryUi;
