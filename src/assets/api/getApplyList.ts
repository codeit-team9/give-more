import axiosInstance from './settings/axiosInstance';

interface Props {
  ShopId: string;
  NoticeId: string;
  Options?: string;
}

async function getApplyList({ ShopId, NoticeId, Options }: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${ShopId}/notices/${NoticeId}/applications?${Options}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getApplyList;
