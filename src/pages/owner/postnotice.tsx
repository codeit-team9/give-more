import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './postNotice.module.css';
import Textarea from '@/components/@common/Input/Textarea';
import DateInput from '@/components/@common/Input/DateInput';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import convertDate from '@/utils/convertDate';
import useAsync from '@/hooks/useAsync';
import postShopsNotice from '@/api/postShopsNotice';
import ClosedIcon from '@/assets/images/close_icon.svg';
import Input from '@/components/@common/Input/Input';
import usePostNotice from '@/hooks/usePostnotice';
import useOwnerInfo from '@/hooks/useOwnerInfo';

function PostNotice() {
  const router = useRouter();
  const [canRegist, setCanRegist] = useState(false);
  const [startsAt, setStartsAt] = useState('');
  const { execute } = useAsync(postShopsNotice);
  const [token, setToken] = useState<string>('');
  const { hourlyPay, setHourlyPay, workhour, setWorkhour, description, setDescription } = usePostNotice();
  const { shop } = useOwnerInfo();

  const Props = {
    authorization: { token },
    url: {
      shopId: shop.item.id,
    },
    data: {
      hourlyPay,
      startsAt: convertDate(new Date()),
      workhour,
      description,
    },
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    if (response.status === 200) router.push('/owner/detail');
  };

  const onChangePayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    if (InputValue === '') {
      setCanRegist(false);
    } else {
      const numberWithNoComma: number = parseInt(InputValue.replace(/,/g, ''), 10);
      setHourlyPay(numberWithNoComma);
      setCanRegist(true);
      e.target.value = e.target.value.replace(/\D/g, '').replace(/([0-9]{1,3})([0-9]{3})/g, '$1,$2');
    }
  };

  const onChangeTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    if (InputValue === '') {
      setCanRegist(false);
    } else {
      const numberWithNoComma: number = parseInt(InputValue.replace(/,/g, ''), 10);
      setWorkhour(numberWithNoComma);
      setCanRegist(true);
      e.target.value = e.target.value.replace(/\D/g, '').replace(/([0-9]{1,3})([0-9]{3})/g, '$1,$2');
    }
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const InputValue = e.target.value;
    setDescription(InputValue);
  };

  const handleNotice = () => {
    if (canRegist) fetch();
  };

  useEffect(() => {
    if (token === '') {
      const item = localStorage.getItem('token');
      if (item) {
        setToken(token);
      }
    }
  }, [token]);

  return (
    <>
      <GNBNav />
      <div className={styles.wrapper}>
        <div className={styles.myProfile}>
          <p className={styles.title}>공고 등록</p>
          <Link href="/owner/detail">
            <ClosedIcon />
          </Link>
        </div>
        <div className={styles.info}>
          <div className={styles.payInput}>
            <Input name="시급*" maxLength={7} onChangeInput={onChangePayInput} />
            <p className={styles.innerText}>원</p>
          </div>
          <div className={styles.dateInput}>
            <DateInput startsAt={startsAt} setStartsAt={setStartsAt} />
          </div>
          <div className={styles.timeInput}>
            <Input name="업무 시간*" maxLength={7} onChangeInput={onChangeTimeInput} />
            <p className={styles.innerText2}>시간</p>
          </div>
          <div className={styles.textarea}>
            <Textarea placeholder="공고 설명을 입력해주세요" name="공고 설명" onChangeInput={onChangeTextarea} />
          </div>
        </div>
        <PrimaryButton text="등록하기" onClick={handleNotice} />
      </div>
    </>
  );
}

export default PostNotice;
