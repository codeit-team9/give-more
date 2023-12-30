import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getShopNotice from '@/api/getShopNotice';

function Home() {
  const { execute } = useAsync(getShopNotice);

  const Props = {
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
      noticeId: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
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
