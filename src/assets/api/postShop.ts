import axiosInstance from './settings/axiosInstance';

interface Props {
  Authorization?: { token: string };
  Data: Data;
}

interface Data {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

async function postShop(Params: Props) {
  try {
    const response = await axiosInstance.post('/shops', Params.Data, {
      headers: { Authorization: `Bearer ${Params.Authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default postShop;
