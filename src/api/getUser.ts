import axiosInstance from './settings/axiosInstance';
import { UserId } from './type';

async function getUser(Props: UserId) {
  try {
    const response = await axiosInstance.get(`/users/${Props.userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export default getUser;
