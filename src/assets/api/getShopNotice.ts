import axiosInstance from './settings/axiosInstance';

interface Props {
  ShopId: string;
  NoticeId: string;
}

async function getShopNotice({ ShopId, NoticeId }: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${ShopId}/notices/${NoticeId}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getShopNotice;
