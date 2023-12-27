import { useEffect } from 'react';
import useAsync from '@/assets/api/settings/useAsync';
import postApply from '@/assets/api/postApply';

function Home() {
  const { execute } = useAsync(postApply);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';

  const Props = {
    Authorization: { token },
    Data: {
      ShopId: '383deacd-9d00-411e-8e42-85b0928e1058',
      NoticeId: '203a5ba9-9c5d-4f4e-aa6d-f32e87eda95c',
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
