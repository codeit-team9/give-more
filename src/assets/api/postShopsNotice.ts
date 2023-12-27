import axiosInstance from './settings/axiosInstance';

interface Props {
  Authorization?: { token: string };
  Url: Url;
  Data: Data;
}

interface Url {
  ShopId: string;
}

interface Data {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

async function postShopsNotice(Props: Props) {
  try {
    const response = await axiosInstance.post(`/shops/${Props.Url.ShopId}/notices`, Props.Data, {
      headers: { Authorization: `Bearer ${Props.Authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default postShopsNotice;
