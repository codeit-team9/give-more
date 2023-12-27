import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getUser from '@/assets/api/getUser';

function Home() {
  const { execute } = useAsync(getUser);

  const Props = {
    UserId: 'c2c7ff2a-f0c1-416a-96ea-6e5cb445b2b6',
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
