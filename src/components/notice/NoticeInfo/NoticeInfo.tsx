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

interface Props {
  isClosed: boolean;
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
}

function NoticeInfo({
  isClosed,
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
}: Props) {
  const formattedWorkTime = formatWorkTime({ type: 'notice', startsAt, workHour });

  const applyStatusSwitch = () => {
    if (isClosed) return { text: '신청 불가' };

    switch (applyStatus) {
      case 'pending':
        return { text: '취소하기' };
      case 'accepted':
        return { text: '신청 불가' };
      case 'canceled':
        return { text: '신청 불가' };
      case 'rejected':
        return { text: '신청 불가' };
      default:
        return { text: '신청하기' };
    }
  };

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
          <div className={styles.buttonContainer}>
            <PrimaryButton text={applyStatusSwitch().text} />
          </div>
        </div>
      </div>
      <NoticeDescription description={noticeDescription} />
    </div>
  );
}

export default NoticeInfo;
