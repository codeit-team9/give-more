import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getNoticeList from '@/api/getNoticeList';
import convertDate from '@/utils/convertDate';

function Home() {
  const { execute } = useAsync(getNoticeList);
  const currentDate = new Date();

  const Props = {
    params: {
      offset: 0,
      limit: 100,
      address: '',
      startsAtGte: convertDate(currentDate),
      hourlyPayGte: 0,
      sort: 'time' as const,
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
