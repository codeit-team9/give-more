import axiosInstance from './settings/axiosInstance';
import { UserId } from './type';

interface Props {
  authorization?: { token: string };
  data: UserId;
}

async function getUserApply(Props: Props) {
  try {
    const response = await axiosInstance.get(`/users/${Props.data.userId}/applications`, {
      headers: { Authorization: `Bearer ${Props.authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getUserApply;
