import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import getNotice from '@/assets/api/getNotice';

function Home() {
  const { execute, loading } = useAsync(getNotice);

  const Option = {
    offset: 10,
    limit: 10,
  };
  const fetch = async () => {
    const response = await execute(Option);
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <p>Hello World</p>;
}

export default Home;
