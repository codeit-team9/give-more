import axiosInstance from './settings/axiosInstance';
import { UserInfo } from './type';

async function postUser(Props: UserInfo) {
  try {
    const response = await axiosInstance.post('/token', Props);
    return response.data;
  } catch (error) {
    return error;
  }
}

export default postUser;
