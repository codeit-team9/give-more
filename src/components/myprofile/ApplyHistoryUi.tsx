import React, { useEffect, useState } from 'react';
import styles from './ApplyHistory.module.css';
import ApplyHistory from './ApplyHistory';
import getUserApplyList from '@/api/getUserApplyList';
import useAsync from '@/hooks/useAsync';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';
import { ApplyHistoryData, RootObject } from './ApplyHistoryType';

interface Props {
  token: string;
}

function ApplyHistoryUi({ token }: Props) {
  const [historyData, setHistoryData] = useState<ApplyHistoryData | undefined>();
  const { execute } = useAsync(getUserApplyList);

  const Props = {
    authorization: { token },
    url: {
      userId: extractUserIdFromJWT(token),
    },
  };

  const fetch = async () => {
    const response = (await execute(Props)) as RootObject;
    const { data } = response;
    if (data) {
      setHistoryData(data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.shop}>가게</div>
        <div className={styles.date}>일자</div>
        <div className={styles.hourlyPay}>시급</div>
        <div className={styles.status}>상태</div>
      </div>
      <div>
        {historyData?.items.map((item) => (
          <ApplyHistory
            key={item.item.id}
            shop={item.item.shop.item.name}
            date={item.item.notice.item.startsAt}
            workhour={item.item.notice.item.workhour}
            hourlyPay={item.item.notice.item.hourlyPay}
            status={item.item.status}
          />
        ))}
      </div>
      <div className={styles.pagenation}>pagenation button</div>
    </div>
  );
}

export default ApplyHistoryUi;
