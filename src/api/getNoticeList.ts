import axiosInstance from './settings/axiosInstance';
import { NoticeSearch } from './type';

interface Props {
  params: NoticeSearch;
}

async function getNoticeList(Props: Props) {
  try {
    const response = await axiosInstance.get('/notices', Props);
    return response;
  } catch (error) {
    return error;
  }
}

export default getNoticeList;
