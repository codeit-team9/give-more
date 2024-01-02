import axiosInstance from './settings/axiosInstance';
import { Apply, UserId } from './type';

interface Props {
  authorization?: { token: string };
  url: UserId;
  data: Apply;
}

async function putApply(props: Props) {
  try {
    const response = await axiosInstance.put(
      `/shops/${props.data.shopId}/notices/${props.data.noticeId}/applications/${props.url.userId}`,
      { status: props.data.status },
      {
        headers: { Authorization: `Bearer ${props.authorization?.token}` },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default putApply;
