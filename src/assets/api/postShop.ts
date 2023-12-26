import axiosInstance from './settings/axiosInstance';

interface Props {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

async function postShop({ name, category, address1, address2, description, imageUrl, originalHourlyPay }: Props) {
  const ShopData = {
    name,
    category,
    address1,
    address2,
    description,
    imageUrl,
    originalHourlyPay,
  };
  const response = await axiosInstance.post('/shops', ShopData);
  return response;
}

export default postShop;
