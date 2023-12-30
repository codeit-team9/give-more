import axiosInstance from './settings/axiosInstance';
import { UserId } from './type';

interface Props {
  authorization?: { token: string };
  url: UserId;
}

async function getUserApplyList(Props: Props) {
  try {
    const response = await axiosInstance.get(`/users/${Props.url.userId}/applications`, {
      headers: { Authorization: `Bearer ${Props.authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getUserApplyList;
