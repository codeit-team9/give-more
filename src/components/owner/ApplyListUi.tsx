import React from 'react';
import styles from './ApplyList.module.css';
import ApplyList from './ApplyList';

function ApplyListUi() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.applicant}>신청자</div>
        <div className={styles.introduce}>소개</div>
        <div className={styles.phone}>전화번호</div>
        <div className={styles.status}>상태</div>
      </div>
      <div>
        <ApplyList />
        <ApplyList />
        <ApplyList />
        <ApplyList />
      </div>
      <div className={styles.pagenation}>pagenation button</div>
    </div>
  );
}

export default ApplyListUi;
