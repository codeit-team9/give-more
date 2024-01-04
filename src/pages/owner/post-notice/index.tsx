import { useState } from 'react';
import HourlyPayInput from '@/components/@common/Input/HourlyPayInput';
import styles from './postNotice.module.css';
import WorkInput from '@/components/@common/Input/WorkInput';
import Textarea from '@/components/@common/Input/Textarea';
import DateInput from '@/components/@common/Input/DateInput';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';

function PostNotice() {
  const [startsAt, setStartsAt] = useState('');

  return (
    <div className={styles.wrapper}>
      <GNBNav />
      <div className={styles.content}>
        <p className={styles.title}>공고 등록</p>
        <div className={styles.info}>
          <HourlyPayInput />
          <DateInput startsAt={startsAt} setStartsAt={setStartsAt} />
          <WorkInput />
        </div>
        <Textarea placeholder="공고 설명을 입력해주세요" name="공고 설명" />
        <PrimaryButton text="등록하기" />
      </div>
    </div>
  );
}

export default PostNotice;
