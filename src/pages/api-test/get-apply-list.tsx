import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getApplyList from '@/assets/api/getApplyList';

function Home() {
  const { execute } = useAsync(getApplyList);

  const Props = {
    ShopId: '383deacd-9d00-411e-8e42-85b0928e1058',
    NoticeId: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
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
