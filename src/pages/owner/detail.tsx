import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getShop from '@/api/getShop';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import Footer from '@/components/@common/Footer/Footer';
import SecondaryButton from '@/components/@common/Button/SecondaryButton';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import useOwnerInfo from '@/hooks/useOwnerInfo';

function Detail() {
  const { execute } = useAsync(getShop);
  const { shop } = useOwnerInfo();

  const Props = {
    shopId: shop.item.id,
  };

  const fetch = async () => {
    const response = await execute(Props);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <GNBNav userType="employer" />
      <div>
        <div>
          <p>내 가게</p>
          <div>
            <img src="" alt="이미지" />
            <p>식당</p>
            <p>도토리 식당</p>
            <div />
            <p />
            <div>
              <SecondaryButton text="편집하기" />
              <PrimaryButton text="공고 등록하기" />
            </div>
          </div>
        </div>
        <div />
      </div>
      <Footer />
    </>
  );
}

export default Detail;
