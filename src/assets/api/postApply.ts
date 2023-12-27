import axiosInstance from './settings/axiosInstance';

interface Props {
  Authorization?: { token: string };
  Data: Data;
}

interface Data {
  ShopId: string;
  NoticeId: string;
}

async function postApply(Props: Props) {
  try {
    const response = await axiosInstance.post(
      `/shops/${Props.Data.ShopId}/notices/${Props.Data.NoticeId}/applications`,
      null,
      {
        headers: { Authorization: `Bearer ${Props.Authorization?.token}` },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default postApply;
