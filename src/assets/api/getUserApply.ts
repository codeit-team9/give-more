import axiosInstance from './settings/axiosInstance';

interface Props {
  Authorization?: { token: string };
  Data: Data;
}

interface Data {
  UserId: string;
}

async function getUserApply(Props: Props) {
  try {
    const response = await axiosInstance.get(`/users/${Props.Data.UserId}/applications`, {
      headers: { Authorization: `Bearer ${Props.Authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default getUserApply;
