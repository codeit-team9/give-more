import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getAllNoticeList from '@/assets/api/getAllNoticeList';

function Home() {
  const { execute } = useAsync(getAllNoticeList);

  const Props = {
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
