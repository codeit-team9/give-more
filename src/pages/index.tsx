import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getShopNotice from '@/assets/api/getShopNotice';

function Home() {
  const { execute, loading } = useAsync(getShopNotice);

  const Option = {
    id: '383deacd-9d00-411e-8e42-85b0928e1058',
    offset: 10,
    limit: 10,
  };
  const fetch = async () => {
    const response = await execute(Option);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
