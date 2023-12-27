import axiosInstance from './settings/axiosInstance';
import { UserTokenData } from './type';

interface Props {
  email: string;
  password: string;
}

async function postUser({ email, password }: Props) {
  const UserData = {
    email,
    password,
  };
  try {
    const response: UserTokenData = await axiosInstance.post('/token', UserData);
    return response;
  } catch (error) {
    return error;
  }
}

export default postUser;
