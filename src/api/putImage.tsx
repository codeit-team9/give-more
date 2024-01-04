import axiosInstance from './settings/axiosInstance';

interface Props {
  url: string;
  File: File | undefined;
}

async function putImage({ url, File }: Props) {
  try {
    const response = await axiosInstance.put(url, File);
    return response;
  } catch (error) {
    return error;
  }
}

export default putImage;
