import axiosInstance from './settings/axiosInstance';

interface Props {
  id: string;
}

async function postShopsNotice({ id }: Props) {
  try {
    const response = await axiosInstance.post(`/shops/${id}/notices`);
    return response;
  } catch (error) {
    return error;
  }
}

export default postShopsNotice;
