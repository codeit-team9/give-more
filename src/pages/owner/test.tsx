import ApplyListUi from '@/components/owner/ApplyListUi';

function Home() {
  const shopId = '383deacd-9d00-411e-8e42-85b0928e1058';
  const noticeId = '07434d6a-3ab8-4e58-8ae4-fad338a3bb9d';
  return <ApplyListUi shopId={shopId} noticeId={noticeId} />;
}

export default Home;
