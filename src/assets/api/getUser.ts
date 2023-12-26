import axiosInstance from './settings/axiosInstance';

interface Props {
  id: string;
}

async function getUser({ id }: Props) {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUser;
