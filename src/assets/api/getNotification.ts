import axiosInstance from './settings/axiosInstance';
import { Pagenation, UserId } from './type';

interface Props {
  authorization?: { token: string };
  url: UserId;
  params: Pagenation;
}

async function getNotification(Props: Props) {
  try {
    const response = await axiosInstance.get(`/users/${Props.url.userId}/alerts`, {
      params: Props.params,
      headers: { Authorization: `Bearer ${Props.authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getNotification;
