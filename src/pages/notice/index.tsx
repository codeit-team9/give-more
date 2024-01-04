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
import { UserData } from '@/@types/user.types';
import getUser from '@/api/getUser';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';

function NoticeDetailPage() {
  const router = useRouter();
  const [token, setToken] = useState<string>('');
  const { execute } = useAsync(getShopNotice);
  const { execute: getUserExecute } = useAsync(getUser);
  const [notice, setNotice] = useState<Notice | undefined>();
  const [user, setUser] = useState<UserData>();

  const { shopId, noticeId } = router.query;

  const fetchNotice = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute({ url: { shopId: shopId as string, noticeId: noticeId as string } });
    setNotice(response.data);
  };

  useEffect(() => {
    if (shopId && noticeId) {
      fetchNotice();
    }
  }, [shopId, noticeId, token]);

  const userDataFetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await getUserExecute({ userId: extractUserIdFromJWT(token) });
    setUser(response.data);
  };

  useEffect(() => {
    if (token) {
      userDataFetch();
    }
  }, [token]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
    }
  }, []);

  if (!notice) {
    return null;
  }

  addNewNotice(notice);

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
      <GNBNav userType={user?.item.type} />
      <NoticeInfo
        isClosed={closed}
        shopId={shopId as string}
        noticeId={noticeId as string}
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
        onApply={fetchNotice}
      />
      <NoticeRecentViewed />
      <Footer />
    </div>
  );
}

export default NoticeDetailPage;
