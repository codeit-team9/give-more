import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import styles from './owner.module.css';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import Footer from '@/components/@common/Footer/Footer';
import useOwnerInfo from '@/hooks/useOwnerInfo';
import useAsync from '@/hooks/useAsync';
import getUser from '@/api/getUser';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';

function Owner() {
  const router = useRouter();
  const { execute } = useAsync(getUser);
  const [token, setToken] = useState<string>('');
  const { setId, setEmail, setType, setName, setPhone, setAddress, setShop, setBio } = useOwnerInfo();

  const Props = {
    userId: extractUserIdFromJWT(token),
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    if (response.data.item.shop !== null) {
      setId(response.data.item.id);
      setEmail(response.data.item.email);
      setType(response.data.item.type);
      setName(response.data.item.name);
      setPhone(response.data.item.phone);
      setAddress(response.data.item.address);
      setShop(response.data.item.shop);
      setBio(response.data.item.bio);
      router.push('/owner/detail');
    }
  };

  useEffect(() => {
    if (token === '') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
    }
    fetch();
  }, [token]);

  return (
    <>
      <GNBNav userType="employer" />
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <p>내 가게</p>
          <div className={styles.innerWrapper}>
            <p>내 가게를 소개하고 공고도 등록해 보세요.</p>
            <Link href="/owner/registration" className={styles.button}>
              <PrimaryButton text="가게 등록하기" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Owner;
