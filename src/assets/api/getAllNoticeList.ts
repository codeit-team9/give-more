import axiosInstance from './settings/axiosInstance';

interface Props {
  url: string;
  params: Params;
}

interface Params {
  offset: number;
  limit: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: string;
}

async function getAllNoticeList(Options: Props) {
  try {
    const response = await axiosInstance.get(Options.url, Options);
    return response;
  } catch (error) {
    return error;
  }
}

export default getAllNoticeList;
