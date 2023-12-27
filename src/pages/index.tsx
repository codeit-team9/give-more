import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getShopNotice from '@/assets/api/getShopNotice';

function Home() {
  const { execute, loading } = useAsync(getShopNotice);

  const Id = {
    ShopId: '383deacd-9d00-411e-8e42-85b0928e1058',
    NoticeId: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
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
