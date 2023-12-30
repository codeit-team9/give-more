import axiosInstance from './settings/axiosInstance';
import { ApplyData } from './type';

interface Props {
  url: ApplyData;
}

async function getShopNotice(Props: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.url.noticeId}/notices/${Props.url.noticeId}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export default getShopNotice;
