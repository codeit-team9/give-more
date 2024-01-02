import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import postUser from '@/api/postUser';

function Home() {
  const { execute } = useAsync(postUser);

  const Props = {
    email: 'employer@gmail.com',
    password: 'abcd1234',
  };

  const fetch = async () => {
    await execute(Props);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
