import axiosInstance from './settings/axiosInstance';

interface Props {
  UserId: string;
}

async function getUser({ UserId }: Props) {
  try {
    const response = await axiosInstance.get(`/users/${UserId}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUser;
