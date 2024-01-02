import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getShopNotice from '@/api/getShopNotice';

function Home() {
  const { execute } = useAsync(getShopNotice);

  const Props = {
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
      noticeId: '07434d6a-3ab8-4e58-8ae4-fad338a3bb9d',
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
