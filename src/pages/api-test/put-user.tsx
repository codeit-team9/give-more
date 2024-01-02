import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';
import putUser from '@/api/putUser';

function Home() {
  const { execute } = useAsync(putUser);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    authorization: { token },
    url: { userId: extractUserIdFromJWT(token) },
    data: {
      name: '테스트이름',
      address: '서울시 동대문구',
      phone: '01012345678',
      bio: 'testetst',
    },
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
