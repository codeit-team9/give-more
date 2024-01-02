import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import postSignUp from '@/api/postNewUser';

function Home() {
  const { execute } = useAsync(postSignUp);

  const Props = {
    email: 'employee@gmail.com',
    password: 'abcd1234',
    type: 'employee' as const,
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
