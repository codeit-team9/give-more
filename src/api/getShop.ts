import axiosInstance from './settings/axiosInstance';
import { ShopId } from './type';

async function getShop(Props: ShopId) {
  try {
    const response = await axiosInstance.get(`/shops/${Props.shopId}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getShop;
