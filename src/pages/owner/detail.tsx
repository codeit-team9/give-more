import { useEffect, useState } from 'react';
import Link from 'next/link';
import useAsync from '@/hooks/useAsync';
import getShop from '@/api/getShop';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import Footer from '@/components/@common/Footer/Footer';
import SecondaryButton from '@/components/@common/Button/SecondaryButton';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import useOwnerInfo from '@/hooks/useOwnerInfo';
import styles from './detail.module.css';
import useShopInfo from '@/hooks/useShopInfo';
import LocationIcon from '@/assets/images/location_icon.svg';
import OwnerNotices from '@/components/owner/OwnerNotices/OwnerNotices';

function Detail() {
  const { execute } = useAsync(getShop);
  const { shop } = useOwnerInfo();
  const [hasNotice, setHasNotice] = useState(false);
  const {
    id,
    setId,
    name,
    setName,
    setCategory,
    address,
    setAddress,
    setSpecAddress,
    imageUrl,
    setImageUrl,
    originalHourlyPay,
    setOriginalHourlyPay,
    description,
    setDescription,
    setUser,
  } = useShopInfo();

  const Props = {
    shopId: shop === null ? null : shop.item.id,
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    if (response.status === 200) {
      setId(response.data.item.id);
      setName(response.data.item.name);
      setCategory(response.data.item.category);
      setAddress(response.data.item.address1);
      setSpecAddress(response.data.item.address2);
      setImageUrl(response.data.item.imageUrl);
      setOriginalHourlyPay(response.data.item.originalHourlyPay);
      setUser(response.data.item.user);
      setHasNotice(true);
      setDescription(response.data.item.description);
    } else {
      setHasNotice(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [hasNotice]);

  return (
    <>
      <GNBNav userType="employer" />
      <div className={styles.wrapper}>
        <div className={styles.firstWrapper}>
          <p className={styles.title}>내 가게</p>
          <div className={styles.shop}>
            <div className={styles.leftWrapper}>
              <img src={imageUrl} alt="이미지" className={styles.img} />
            </div>
            <div className={styles.rightWrapper}>
              <p className={styles.type}>식당</p>
              <p className={styles.shopName}>{name}</p>
              <div className={styles.location}>
                <LocationIcon />
                <p>{address}</p>
              </div>
              <p className={styles.description}>{description}</p>
              <div className={styles.buttonWrapper}>
                <Link href="/owner/registration" className={styles.button}>
                  <SecondaryButton text="편집하기" />
                </Link>
                <Link href="/owner/postnotice" className={styles.button}>
                  <PrimaryButton text="공고 등록하기" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {hasNotice ? (
          <div className={styles.secondWrapper}>
            <OwnerNotices
              shopId={id}
              imageUrl={imageUrl}
              name={name}
              address1={address}
              originalHourlyPay={originalHourlyPay}
            />
          </div>
        ) : (
          <div className={styles.secondWrapper}>
            <p className={styles.title}>등록한 공고</p>
            <div className={styles.registWrapper}>
              <p>공고를 등록해 보세요.</p>
              <div className={styles.secondButton}>
                <PrimaryButton text="공고 등록하기" />
              </div>
            </div>
          </div>
        )}
        <div />
      </div>
      <Footer />
    </>
  );
}

export default Detail;
