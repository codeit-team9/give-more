import React, { useEffect, useState } from 'react';
import styles from './ApplyList.module.css';
import ApplyList from './ApplyList';
import useAsync from '@/hooks/useAsync';
import getApplyList from '@/api/getApplyList';
import { ApplyData } from '@/api/type';
import { ApplyListData, RootObject } from './ApplyListType';

function ApplyListUi({ shopId, noticeId }: ApplyData) {
  const [applyData, setApplyData] = useState<ApplyListData | undefined>();
  const { execute } = useAsync(getApplyList);

  const Props = {
    url: {
      shopId,
      noticeId,
    },
    params: {
      offset: 10,
      limit: 10,
    },
  };

  const fetch = async () => {
    const response = (await execute(Props)) as RootObject;
    const { data } = response;
    if (data) {
      console.log();
      setApplyData(data);
      console.log(response);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.applicant}>신청자</div>
        <div className={styles.introduce}>소개</div>
        <div className={styles.phone}>전화번호</div>
        <div className={styles.status}>상태</div>
      </div>
      <div>
        {applyData?.items.map((item) => (
          <ApplyList
            key={item.item.id}
            applicant={item.item.user.item.name}
            // introduce api 확인 필요
            introduce={item.item.notice.item.description}
            phone={item.item.user.item.phone}
            status={item.item.status}
          />
        ))}
      </div>
      <div className={styles.pagenation}>pagenation button</div>
    </div>
  );
}

export default ApplyListUi;
