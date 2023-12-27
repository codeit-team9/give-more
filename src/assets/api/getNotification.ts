import axiosInstance from './settings/axiosInstance';

interface Props {
  Authorization?: { token: string };
  Url: Url;
  Params: Params;
}

interface Url {
  UserId: string;
}

interface Params {}

async function getNotification(Props: Props) {
  try {
    const response = await axiosInstance.get(`/users/${Props.Url.UserId}/alerts`, {
      params: Props.Params,
      headers: { Authorization: `Bearer ${Props.Authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getNotification;
