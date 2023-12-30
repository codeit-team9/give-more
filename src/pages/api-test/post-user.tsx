import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import postNewUser from '@/api/postNewUser';

function Home() {
  const { execute } = useAsync(postNewUser);

  const Props = {
    email: 'employer@gmail.com',
    password: 'abcd1234',
    userType: 'employee' as const,
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