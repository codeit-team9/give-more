import axiosInstance from './settings/axiosInstance';
import { NotificationData } from './type';

interface Props {
  authorization?: { token: string };
  url: NotificationData;
}

async function putNotification(props: Props) {
  try {
    const response = await axiosInstance.put(`/users/${props.url.userId}/alerts/${props.url.alertId}`, null, {
      headers: { Authorization: `Bearer ${props.authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default putNotification;
