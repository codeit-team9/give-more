import axiosInstance from './settings/axiosInstance';
import { EditUserInfo, UserId } from './type';

interface Props {
  authorization?: { token: string };
  url: UserId;
  data: EditUserInfo;
}

async function putApply(props: Props) {
  try {
    const response = await axiosInstance.put(
      `/users/${props.url.userId}`,
      { name: props.data.name, phone: props.data.phone, address: props.data.address, bio: props.data.bio },
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
