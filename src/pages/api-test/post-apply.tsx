import { useEffect } from 'react';
import useAsync from '@/hooks/useAsync';
import postApply from '@/api/postApply';

function Home() {
  const { execute } = useAsync(postApply);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0YzI3MDQ3OC1mODYwLTQ1ZTQtOGI4My01MjU5MmNkNWM4YzYiLCJpYXQiOjE3MDM5MDc5ODd9.Ia_1z0uNfPfqnPWhY4ticiBwm8FYpqFmPDaXf00q6n8';

  const Props = {
    authorization: { token },
    data: {
      shopId: '383deacd-9d00-411e-8e42-85b0928e1058',
      noticeId: '07434d6a-3ab8-4e58-8ae4-fad338a3bb9d',
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
