import { useEffect } from 'react';

import useAsync from '@/assets/api/settings/useAsync';
import postNewUser from '@/assets/api/postNewUser';

function Home() {
  const { execute, loading } = useAsync(postNewUser);

  const newUser = {
    email: 'employeed@gmail.com',
    password: 'abcd1234',
    type: 'employee',
  };
  const fetch = async () => {
    const response = await execute(newUser);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
