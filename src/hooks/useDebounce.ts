import { useCallback, useEffect, useRef } from 'react';

export function useDebounce<T extends unknown[]>(callback: (...args: T) => void, ms: number) {
  const timerId = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(timerId.current);
    };
  }, []);

  return useCallback(
    (...args: T) => {
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        callback(...args);
      }, ms);
    },
    [callback, ms],
  );
}
