import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getNotification from '@/api/getNotification';

function Home() {
  const { execute } = useAsync(getNotification);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    authorization: { token },
    url: {
      userId: '3c993473-4b17-4a88-a7e1-aa6b5b01fe4f',
    },
    params: {
      offset: 0,
      limit: 100,
    },
  };

  const fetch = async () => {
    await execute(Props);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World </p>;
}

export default Home;
