import React from 'react';
import styles from './ApplyList.module.css';
import StateButton from '../@common/StateButton/StateButton';

interface Props {
  applicant: string;
  introduce: string;
  phone: string;
  status?: Status;
}

type Status = 'pending' | 'accept' | 'reject';

function ApplyList({ applicant, introduce, phone, status }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.applicant}>{applicant}</div>
      <div className={styles.introduce}>{introduce}</div>
      <div className={styles.phone}>{phone}</div>
      {status === 'pending' ? (
        <div className={styles.status}>
          <StateButton type="reject" />
          <StateButton type="accept" />
        </div>
      ) : (
        <div className={styles.status}>{status}</div>
      )}
    </div>
  );
}

export default ApplyList;
