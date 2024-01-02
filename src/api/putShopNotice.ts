import axiosInstance from './settings/axiosInstance';
import { ApplyData, NewNoticeData } from './type';

interface Props {
  authorization?: { token: string };
  url: ApplyData;
  data: NewNoticeData;
}

async function putShopNotice(props: Props) {
  try {
    const response = await axiosInstance.put(
      `/users/${props.url.shopId}/notices/${props.url.noticeId}`,
      {
        hourlyPay: props.data.hourlyPay,
        startsAt: props.data.startsAt,
        workhour: props.data.workhour,
        description: props.data.description,
      },
      {
        headers: { Authorization: `Bearer ${props.authorization?.token}` },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default putShopNotice;
