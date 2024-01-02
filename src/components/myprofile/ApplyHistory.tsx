import React from 'react';
import styles from './ApplyHistory.module.css';

import separatorHourlyPay from '@/utils/separatorHourlyPay';
import convertedWorkhour from '@/utils/ConvertWorkhour';
import { Status } from './ApplyHistoryType';

interface Props {
  shop?: string;
  date?: string | undefined;
  workhour?: number;
  hourlyPay?: number | undefined;
  status?: Status | undefined;
}

function ApplyHistory({ shop, date, workhour, hourlyPay, status }: Props) {
  const { formattedDate, formattedTime } = date
    ? convertedWorkhour(date, workhour)
    : { formattedDate: '', formattedTime: '' };

  const hourlyPayString = hourlyPay ? separatorHourlyPay(hourlyPay) : '';

  return (
    <div className={styles.content}>
      <div className={styles.shop}>{shop}</div>
      <div className={styles.date}>
        {formattedDate} ~ {formattedTime} ({workhour}시간)
      </div>
      <div className={styles.hourlyPay}>{hourlyPayString}원</div>
      <div className={styles.status}>{status !== undefined ? String(status) : ''}</div>
    </div>
  );
}

export default ApplyHistory;
