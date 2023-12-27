import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import postUser from '@/assets/api/postUser';

function Home() {
  const { execute } = useAsync(postUser);

  const Props = {
    email: 'employer@gmail.com',
    password: 'abcd1234',
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
