import axiosInstance from './settings/axiosInstance';

interface Props {
  id: string;
  offset?: number;
  limit?: number;
}

async function getShopsNoticeList({ id, offset, limit }: Props) {
  const option = {
    offset,
    limit,
  };
  try {
    const response = await axiosInstance.get(`/shops/${id}/notices?${option}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getShopsNoticeList;
