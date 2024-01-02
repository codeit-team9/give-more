import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import putNotification from '@/api/putNotification';

function Home() {
  const { execute } = useAsync(putNotification);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    authorization: { token },
    url: { userId: '383deacd-9d00-411e-8e42-85b0928e1058', alertId: '07434d6a-3ab8-4e58-8ae4-fad338a3bb9d' },
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
