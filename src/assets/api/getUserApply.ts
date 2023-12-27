import axiosInstance from './settings/axiosInstance';

interface Props {
  UserId: string;
}

async function getUserApply({ UserId }: Props) {
  try {
    const response = await axiosInstance.get(`/users/${UserId}/applications`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUserApply;
