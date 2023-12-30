import axiosInstance from './settings/axiosInstance';
import { NewUserInfo } from './type';

async function postNewUser(Props: NewUserInfo) {
  try {
    const response = await axiosInstance.post('/users', Props);
    return response;
  } catch (error) {
    return error;
  }
}

export default postNewUser;
