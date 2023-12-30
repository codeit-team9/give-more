import axiosInstance from './settings/axiosInstance';
import { NewNoticeData, ShopId } from './type';

interface Props {
  authorization?: { token: string };
  url: ShopId;
  data: NewNoticeData;
}

async function postShopsNotice(Props: Props) {
  try {
    const response = await axiosInstance.post(`/shops/${Props.url.shopId}/notices`, Props.data, {
      headers: { Authorization: `Bearer ${Props.authorization?.token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export default postShopsNotice;
