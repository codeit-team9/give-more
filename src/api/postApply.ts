import axiosInstance from './settings/axiosInstance';
import { ApplyData } from './type';

interface Props {
  authorization?: { token: string };
  data: ApplyData;
}

async function postApply(Props: Props) {
  try {
    const response = await axiosInstance.post(
      `/shops/${Props.data.shopId}/notices/${Props.data.noticeId}/applications`,
      null,
      {
        headers: { Authorization: `Bearer ${Props.authorization?.token}` },
      },
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export default postApply;
