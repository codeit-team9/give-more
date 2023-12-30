import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import getUserApplyList from '@/api/getUserApplyList';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';

function Home() {
  const { execute } = useAsync(getUserApplyList);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    authorization: { token },
    url: {
      userId: extractUserIdFromJWT(token),
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
