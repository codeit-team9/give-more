import axiosInstance from './settings/axiosInstance';

interface Props {
  id: string;
}

async function getShop({ id }: Props) {
  try {
    const response = await axiosInstance.get(`/shops/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getShop;
