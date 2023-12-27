import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getNotification from '@/assets/api/getNotification';

function Home() {
  const { execute, loading } = useAsync(getNotification);

  const Id = {
    UserId: '52228cd0-a7cf-4862-a1a2-ebfbd324a26c',
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
