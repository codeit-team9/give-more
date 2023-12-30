import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getApplyList from '@/api/getApplyList';

function Home() {
  const { execute } = useAsync(getApplyList);

  const Props = {
    url: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
      noticeId: '57f363c3-1107-4db8-b24a-eee2960a2bbb',
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
