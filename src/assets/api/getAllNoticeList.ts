import axiosInstance from './settings/axiosInstance';

interface Props {
  offset: number;
  limit: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: string;
}

async function getAllNoticeList({ offset, limit, address, keyword, startsAtGte, hourlyPayGte }: Props) {
  const options = {
    offset,
    limit,
    address,
    keyword,
    startsAtGte,
    hourlyPayGte,
  };
  try {
    const response = await axiosInstance.get(`/notices?${options}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getAllNoticeList;
