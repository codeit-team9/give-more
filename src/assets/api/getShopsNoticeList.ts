import axiosInstance from './settings/axiosInstance';

interface Props {
  ShopId: string;
  params: Params;
}

interface Params {
  offset: number;
  limit: number;
}

async function getShopsNoticeList(Props: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.ShopId}/notices`, {
      params: Props.params,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getShopsNoticeList;
