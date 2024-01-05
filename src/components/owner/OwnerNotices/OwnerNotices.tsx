import { useEffect, useState } from 'react';
import NoticeList from '@/components/notice/NoticeList/NoticeList';
import styles from './OwnerNotices.module.css';
import useAsync from '@/hooks/useAsync';
import getShopsNoticeList from '@/api/getShopsNoticeList';
import Pagination from '@/components/@common/pagination/Pagination';
import usePagination from '@/hooks/usePagination';
import { NoticeData } from '@/@types/notice.types';

interface Props {
  shopId: string;
  imageUrl: string;
  name: string;
  address1: string;
  originalHourlyPay: number;
}

function OwnerNotices({ shopId, imageUrl, name, address1, originalHourlyPay }: Props) {
  const [notice, setNotice] = useState<NoticeData>();
  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } = usePagination({});
  const { execute } = useAsync(getShopsNoticeList);

  const Props = {
    url: {
      shopId,
    },
    params: {
      offset: (currentPage - 1) * 6,
      limit: 6,
    },
  };

  const handlePageChange = (pageNumber: number) => {
    updateCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalItems / 6);

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    setNotice(response.data);
    updateTotalItems(response.data.count);
  };

  useEffect(() => {
    fetch();
  }, [currentPage]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.sectionName}>내가 등록한 공고</h2>
        <NoticeList
          type="owner"
          count={6}
          items={notice?.items}
          imageUrl={imageUrl}
          name={name}
          address1={address1}
          originalHourlyPay={originalHourlyPay}
          shopId={shopId}
        />
      </div>
      {totalPages > 0 && notice && notice.items.length > 0 && (
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      )}
    </div>
  );
}

export default OwnerNotices;
