import { useEffect, useState } from 'react';
import HourlyPayInput from '@/components/@common/Input/HourlyPayInput';
import styles from './postNotice.module.css';
import WorkInput from '@/components/@common/Input/WorkInput';
import Textarea from '@/components/@common/Input/Textarea';
import DateInput from '@/components/@common/Input/DateInput';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import convertDate from '@/utils/convertDate';
import useAsync from '@/hooks/useAsync';
import postShopsNotice from '@/api/postShopsNotice';

function PostNotice() {
  const [startsAt, setStartsAt] = useState('');
  const { execute } = useAsync(postShopsNotice);
  const [item, setItem] = useState<string>('');

  const Props = {
    authorization: { token: item },
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
    },
    data: {
      hourlyPay: 10000,
      startsAt: convertDate(new Date()),
      workhour: 3,
      description: 'test',
    },
  };

  const fetch = async () => {
    if (Props.authorization) {
      await execute(Props);
    }
  };

  useEffect(() => {
    fetch();
    if (typeof window !== undefined) {
      const token = localStorage.getItem('token');
      if (token) {
        setItem(token);
      }
    }
  }, []);

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
