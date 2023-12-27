import axiosInstance from './settings/axiosInstance';

interface Props {
  ShopId: string;
}

async function getShop({ ShopId }: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${ShopId}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getShop;
