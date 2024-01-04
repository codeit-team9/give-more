import axiosInstance from './settings/axiosInstance';

interface Props {
  url: string;
}

async function getImage({ url }: Props) {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    return error;
  }
}

export default getImage;
