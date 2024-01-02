import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import postShopsNotice from '@/api/postShopsNotice';
import convertDate from '@/utils/convertDate';

function Home() {
  const { execute } = useAsync(postShopsNotice);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    authorization: { token },
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
    },
    data: {
      hourlyPay: 10000,
      startsAt: convertDate(new Date()),
      workhour: 3,
      description: 'test',
    },
  };

  const fetch = async () => {
    await execute(Props);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
