import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { useEffectOnce } from './useEffectOnce';

export const useAsync = <T>(asyncFunction: () => Promise<AxiosResponse<T>>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const [data, setData] = useState<null | T>(null);

  // eslint-disable-next-line consistent-return
  const excute = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(() => {
    excute();
  });

  return { excute, loading, error, data };
};
