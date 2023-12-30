import axiosInstance from './settings/axiosInstance';
import { ApplyData, Pagenation } from './type';

interface Props {
  url: ApplyData;
  params: Pagenation;
}

async function getApplyList(Props: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.url.shopId}/notices/${Props.url.noticeId}/applications`, {
      params: Props.params,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export default getApplyList;
