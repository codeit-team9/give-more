import axiosInstance from './settings/axiosInstance';

interface Props {
  ShopId: string;
  NoticeId: string;
  params: Params;
}

interface Params {
  offset: number;
  limit: number;
}

async function getShopNotice(Props: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.ShopId}/notices/${Props.NoticeId}`, {
      params: Props.params,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getShopNotice;
