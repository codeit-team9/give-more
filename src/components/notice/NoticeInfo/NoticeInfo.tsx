import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import HourlyPayBadge from '../HourlyPayBadge/HourlyPayBadge';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import NoticeCardDescription from '../NoticeCard/NoticeCardDescription';
import { Address } from '@/@types/address.types';
import formatWorkTime from '@/utils/formatWorkTime';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import { Status } from '@/@types/notice.types';
import NoticeDescription from './NoticeDescription/NoticeDescription';
import styles from './NoticeInfo.module.css';
import SecondaryButton from '@/components/@common/Button/SecondaryButton';
import InActiveButton from '@/components/@common/Button/InActiveButton';
import useAsync from '@/hooks/useAsync';
import postApply from '@/api/postApply';

interface Props {
  isClosed: boolean;
  shopId: string | undefined;
  noticeId: string | undefined;
  applyStatus?: Status;
  category: string;
  shopName: string;
  address: Address;
  imageUrl: string;
  defaultHourlyPay: number;
  currentHourlyPay: number;
  shopDescription: string;
  noticeDescription: string;
  startsAt: string;
  workHour: number;
  onApply: () => void;
}

function NoticeInfo({
  isClosed,
  shopId,
  noticeId,
  applyStatus,
  category,
  shopName,
  address,
  imageUrl,
  defaultHourlyPay,
  currentHourlyPay,
  shopDescription,
  noticeDescription,
  startsAt,
  workHour,
  onApply,
}: Props) {
  const formattedWorkTime = formatWorkTime({ type: 'notice', startsAt, workHour });
  const { execute } = useAsync(postApply);
  const [token, setToken] = useState<string>('');

  const Props = {
    authorization: { token },
    data: {
      shopId: shopId as string,
      noticeId: noticeId as string,
    },
  };

  const fetch = async () => {
    if (shopId && noticeId) {
      await execute(Props);
    }
  };

  const handleApply = () => {
    fetch();
    onApply();
  };

  const applyStatusSwitch = () => {
    if (isClosed) return <InActiveButton />;

    switch (applyStatus) {
      case 'pending':
        return <SecondaryButton text="취소하기" />;
      case 'accepted':
        return <InActiveButton />;
      case 'canceled':
        return <InActiveButton />;
      case 'rejected':
        return <InActiveButton />;
      default:
        return <PrimaryButton text="신청하기" onClick={handleApply} />;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.shopName}>{shopName}</h2>
      </div>
      <div className={styles.shopInfoContainer}>
        <div className={styles.imageContainer}>
          <Image
            fill
            className={classNames(styles.image, isClosed && styles.lastNotice)}
            src={imageUrl}
            alt={shopName}
          />
          {isClosed && <p className={styles.lastNotice}>마감 완료</p>}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.hourlyPayContainer}>
            <p className={styles.hourlyPayName}>시급</p>
            <div className={styles.hourlyPayDescriptionContainer}>
              <p className={styles.hourlyPayDescription}>{separatorHourlyPay(currentHourlyPay)}원</p>
              <HourlyPayBadge
                defaultHourlyPay={defaultHourlyPay}
                currentHourlyPay={currentHourlyPay}
                isClosed={isClosed}
              />
            </div>
          </div>
          <NoticeCardDescription type="duration" description={formattedWorkTime} isClosed={isClosed} />
          <NoticeCardDescription type="address" description={address} isClosed={isClosed} />
          <p className={styles.description}>{shopDescription}</p>
          <div className={styles.buttonContainer}>{applyStatusSwitch()}</div>
        </div>
      </div>
      <NoticeDescription description={noticeDescription} />
    </div>
  );
}

export default NoticeInfo;
