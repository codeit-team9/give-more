import axiosInstance from './settings/axiosInstance';

interface Props {
  email: string;
  password: string;
  type: string;
}

async function postNewUser({ email, password, type }: Props) {
  const UserData = {
    email,
    password,
    type,
  };

  try {
    const response = await axiosInstance.post('/users', UserData);
    return response;
  } catch (error) {
    return error;
  }
}

export default postNewUser;
