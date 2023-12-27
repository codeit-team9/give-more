import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getNotification from '@/assets/api/getNotification';

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
      offset: 30,
      limit: 20,
    },
  };

  const fetch = async () => {
    const response = await execute(Props);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World </p>;
}

export default Home;
