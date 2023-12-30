import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getShopsNoticeList from '@/api/getShopsNoticeList';

function Home() {
  const { execute } = useAsync(getShopsNoticeList);

  const Props = {
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
    },
    params: {
      offset: 0,
      limit: 100,
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
