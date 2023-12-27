import axiosInstance from './settings/axiosInstance';

interface Props {
  ShopId: string;
  NoticeId: string;
}

async function postApply({ ShopId, NoticeId }: Props) {
  try {
    const response = await axiosInstance.post(`/shops/${ShopId}/notices/${NoticeId}/applications`);
    return response;
  } catch (error) {
    return error;
  }
}

export default postApply;
