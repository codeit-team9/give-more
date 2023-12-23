import { axiosInstance, useAsync } from './settings';

export const usePostUser = () => {
  const testData = {
    email: 'abc@gmail.com',
    password: 'abcd1234',
  };
  const checkUser = () => axiosInstance.post('/token', testData);
  const { loading, error, data } = useAsync(checkUser);

  return { loading, error, data };
};
