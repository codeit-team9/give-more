import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import styles from './profile.module.css';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import Footer from '@/components/@common/Footer/Footer';
import SecondaryButton from '@/components/@common/Button/SecondaryButton';
import PhoneIcon from '@/assets/images/phone_icon.svg';
import LocationIcon from '@/assets/images/location_icon.svg';
import useUserInfo from '@/hooks/useUserInfo';
import ApplyHistoryUi from '@/components/myprofile/ApplyHistoryUi';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';
import useAsync from '@/hooks/useAsync';
import getUserApplyList from '@/api/getUserApplyList';
import { RootObject } from '@/components/myprofile/ApplyHistoryType';

function Detail() {
  const router = useRouter();
  const { name, phone, address, bio } = useUserInfo();
  const [token, setToken] = useState<string>('');

  const [count, setCount] = useState<number>();
  const { execute } = useAsync(getUserApplyList);

  const handleEdit = () => {
    router.push('/profile/registration');
  };

  const handleList = () => {
    router.push('/');
  };

  const Props = () => ({
    authorization: { token },
    url: {
      userId: extractUserIdFromJWT(token),
    },
  });

  const fetch = async () => {
    const response = (await execute(Props())) as RootObject;
    const { data } = response;
    setCount(data.count);
  };

  useEffect(() => {
    if (token === '') {
      const item = localStorage.getItem('token');
      if (item) {
        setToken(item);
      }
    }
    if (token) {
      fetch();
    }
  }, [token]);

  return (
    <>
      <GNBNav userType="employee" />
      <div className={styles.wrapper}>
        <div className={styles.detailWrapper}>
          <p className={styles.title}>내 프로필</p>
          <div className={styles.profileWrapper}>
            <div className={styles.profileContent}>
              <div className={styles.profileInner}>
                <p className={styles.name}>이름</p>
                <p className={styles.nameValue}>{name}</p>
                <div className={styles.profileDetail}>
                  <PhoneIcon />
                  <p>{phone}</p>
                </div>
                <div className={styles.profileDetail}>
                  <LocationIcon />
                  <p>{address}</p>
                </div>
              </div>
              <p className={styles.bio}>{bio}</p>
            </div>
            <div className={styles.profileButton}>
              <SecondaryButton text="편집하기" onClick={handleEdit} />
            </div>
          </div>
        </div>
        <div className={styles.shopWrapper}>
          <p className={styles.title}>신청 내역</p>
          {count === 0 ? (
            <div className={styles.shopList}>
              <p>아직 신청 내역이 없어요.</p>
              <div className={styles.shopButton}>
                <PrimaryButton text="공고 보러가기" onClick={handleList} />
              </div>
            </div>
          ) : (
            <ApplyHistoryUi token={token} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
