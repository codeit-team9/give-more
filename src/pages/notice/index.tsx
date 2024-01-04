import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAsync from '@/hooks/useAsync';
import getShopNotice from '@/api/getShopNotice';
import NoticeInfo from '@/components/notice/NoticeInfo/NoticeInfo';
import { Notice } from '@/@types/notice.types';
import { Address } from '@/@types/address.types';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import { addNewNotice } from '@/utils/noticeRecentViewed';
import NoticeRecentViewed from '@/components/notice/NoticeRecentViewed/NoticeRecentViewed';
import styles from './NoticeDetail.module.css';
import Footer from '@/components/@common/Footer/Footer';

function NoticeDetailPage() {
  const router = useRouter();
  const { execute } = useAsync(getShopNotice);
  const [notice, setNotice] = useState<Notice | undefined>();

  const { shopId, noticeId } = router.query;

  const fetchNotice = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute({ url: { shopId: shopId as string, noticeId: noticeId as string } });
    setNotice(response.data);
  };

  useEffect(() => {
    if (!notice && shopId && noticeId) {
      fetchNotice();
    }
    if (notice) {
      addNewNotice(notice);
    }
  }, [notice, shopId, noticeId]);

  if (!notice) {
    return null;
  }

  const {
    closed,
    currentUserApplication,
    shop: { item: shopItem },
    hourlyPay,
    description: noticeDescription,
    startsAt,
    workhour,
  } = notice.item;

  const {
    category,
    name: shopName,
    address1: address,
    imageUrl,
    originalHourlyPay: defaultHourlyPay,
    description: shopDescription,
  } = shopItem;

  return (
    <div className={styles.wrapper}>
      <GNBNav />
      <NoticeInfo
        isClosed={closed}
        applyStatus={currentUserApplication?.item.status}
        category={category}
        shopName={shopName}
        address={address as Address}
        imageUrl={imageUrl}
        defaultHourlyPay={defaultHourlyPay}
        currentHourlyPay={hourlyPay}
        shopDescription={shopDescription}
        noticeDescription={noticeDescription}
        startsAt={startsAt}
        workHour={workhour}
      />
      <NoticeRecentViewed />
      <Footer />
    </div>
  );
}

export default NoticeDetailPage;
