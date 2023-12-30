import { useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAsync<T extends any[], U>(
  asyncFunction: (...args: T) => Promise<U>,
): { execute: (...args: T) => Promise<U>; loading: boolean } {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line consistent-return
  const execute = useCallback(
    async (...args: T) => {
      setLoading(true);

      try {
        const response = await asyncFunction(...args);
        return response;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction],
  );

  return { execute, loading };
}

export default useAsync;
