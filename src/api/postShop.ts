import axiosInstance from './settings/axiosInstance';
import { NewShopData } from './type';

interface Props {
  authorization?: { token: string };
  data: NewShopData;
}

async function postShop(Props: Props) {
  try {
    const response = await axiosInstance.post('/shops', Props.data, {
      headers: { Authorization: `Bearer ${Props.authorization?.token}` },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export default postShop;
