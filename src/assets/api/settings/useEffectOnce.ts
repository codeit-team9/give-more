import { EffectCallback, useEffect } from 'react';

export const useEffectOnce = (callback: EffectCallback) => {
  useEffect(() => {
    callback();
  }, []);
};
