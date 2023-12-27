import axiosInstance from './settings/axiosInstance';
import { ApplyData, Pagenation } from './type';

interface Props {
  url: ApplyData;
  params: Pagenation;
}

async function getShopNotice(Props: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.url.noticeId}/notices/${Props.url.noticeId}`, {
      params: Props.params,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getShopNotice;
