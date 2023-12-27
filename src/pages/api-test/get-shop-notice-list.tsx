import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getShopsNoticeList from '@/assets/api/getShopsNoticeList';

function Home() {
  const { execute } = useAsync(getShopsNoticeList);

  const Props = {
    ShopId: '383deacd-9d00-411e-8e42-85b0928e1058',
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
