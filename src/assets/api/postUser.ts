import axiosInstance from './settings/axiosInstance';
import { UserTokenData } from './type';

async function postUser(email: string, password: string) {
  const UserData = {
    email,
    password,
  };
  const response: UserTokenData = await axiosInstance.post('/token', UserData);

  return response;
}

export default postUser;
