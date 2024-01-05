import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import styles from './profile.module.css';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import Footer from '@/components/@common/Footer/Footer';
import useUserInfo from '@/hooks/useUserInfo';
import useAsync from '@/hooks/useAsync';
import getUser from '@/api/getUser';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';

function Profile() {
  const router = useRouter();
  const { execute } = useAsync(getUser);
  const [token, setToken] = useState<string>('');
  const { setId, setEmail, setType, setName, setPhone, setAddress, setShop, setBio } = useUserInfo();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Props = () => ({
    userId: extractUserIdFromJWT(token),
  });

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props());
    if (response.data.item.address !== undefined) {
      setId(response.data.item.id);
      setEmail(response.data.item.email);
      setType(response.data.item.type);
      setName(response.data.item.name);
      setPhone(response.data.item.phone);
      setAddress(response.data.item.address);
      setShop(response.data.item.shop);
      setBio(response.data.item.bio);
      router.push('/profile/detail');
    }
  };

  useEffect(() => {
    if (token) {
      fetch();
    }
  }, [token]);

  useEffect(() => {
    if (token === '') {
      const item = localStorage.getItem('token');
      if (item) {
        setToken(item);
      }
    }
  }, [token]);

  return (
    <>
      <GNBNav userType="employee" />
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <p>내 프로필</p>
          <div className={styles.innerWrapper}>
            <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
            <Link href="/profile/registration" className={styles.button}>
              <PrimaryButton text="내 프로필 등록하기" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
