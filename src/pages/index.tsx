import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getShop from '@/assets/api/getShop';

function Home() {
  const { execute, loading } = useAsync(getShop);

  const Id = {
    id: '383deacd-9d00-411e-8e42-85b0928e1058',
  };
  const fetch = async () => {
    const response = await execute(Id);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
