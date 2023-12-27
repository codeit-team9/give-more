import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import postShop from '@/assets/api/postShop';

function Home() {
  const { execute } = useAsync(postShop);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    Authorization: { token },
    Data: {
      name: '내 가게',
      category: '편의점',
      address1: '서울시 종로구',
      address2: '상세 주소인듯',
      description: '가게 설명',
      imageUrl: 'https://udon0410.com/wp-content/themes/udon0410/assets/images/history01_01.png',
      originalHourlyPay: 9620,
    },
  };

  const fetch = async () => {
    const response = await execute(Props);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
