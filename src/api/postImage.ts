import axiosInstance from './settings/axiosInstance';

interface Props {
  authorization?: { token: string };
  imageFile: File;
}

async function postImage({ authorization, imageFile }: Props) {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axiosInstance.post('/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authorization?.token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default postImage;
