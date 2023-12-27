import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import postShopsNotice from '@/assets/api/postShopsNotice';

function Home() {
  const { execute } = useAsync(postShopsNotice);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    Authorization: { token },
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
    },
    data: {
      hourlyPay: 10000,
      startsAt: '2024-06-01T20:37:10Z',
      workhour: 3,
      description: '노예 구함',
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
