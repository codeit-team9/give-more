import React from 'react';
import styles from './ApplyList.module.css';

function ApplyList() {
  return (
    <div className={styles.content}>
      <div className={styles.applicant}>applicant</div>
      <div className={styles.introduce}>introduce</div>
      <div className={styles.phone}>phone</div>
      <div className={styles.status}>status</div>
    </div>
  );
}

export default ApplyList;
