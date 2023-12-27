import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import postNewUser from '@/assets/api/postNewUser';

function Home() {
  const { execute } = useAsync(postNewUser);

  const Props = {
    email: 'employee@gmail.com',
    password: 'abcd1234',
    type: 'employee',
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
