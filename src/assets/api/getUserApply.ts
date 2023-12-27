import axiosInstance from './settings/axiosInstance';

interface Props {
  UserId: string;
  Options?: string;
}

async function getUserApply({ UserId, Options }: Props) {
  try {
    const response = await axiosInstance.get(`/users/${UserId}/alerts?${Options}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUserApply;
