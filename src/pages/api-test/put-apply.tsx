import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import putApply from '@/api/putApply';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';

function Home() {
  const { execute } = useAsync(putApply);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    authorization: { token },
    url: { userId: extractUserIdFromJWT(token) },
    data: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
      noticeId: '07434d6a-3ab8-4e58-8ae4-fad338a3bb9d',
      status: 'accepted' as const,
    },
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
