import axiosInstance from './settings/axiosInstance';

interface Props {
  authorization?: { token: string };
  data: {
    name: string;
  };
}

async function postImage(Props: Props) {
  try {
    const response = await axiosInstance.post('/images', Props.data, {
      headers: { Authorization: `Bearer ${Props.authorization?.token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default postImage;
