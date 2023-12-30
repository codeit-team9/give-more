import axiosInstance from './settings/axiosInstance';
import { Pagenation, ShopId } from './type';

interface Props {
  url: ShopId;
  params: Pagenation;
}

async function getShopsNoticeList(Props: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.url.shopId}/notices`, {
      params: Props.params,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getShopsNoticeList;
