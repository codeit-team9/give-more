import { axiosInstance, useAsync } from './settings';

interface Props {
  email: string;
  password: string;
  type: UserType;
}

type UserType = 'employee' | 'employer';

export const usePostNewUser = ({ email, password, type }: Props) => {
  const UserData = {
    email,
    password,
    type,
  };

  const newUser = () => axiosInstance.post('/users', UserData);
  const { loading, error, data } = useAsync(newUser);

  return { loading, error, data };
};
