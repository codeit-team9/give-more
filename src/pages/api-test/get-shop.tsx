import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getShop from '@/api/getShop';

function Home() {
  const { execute } = useAsync(getShop);

  const Props = {
    shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
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
