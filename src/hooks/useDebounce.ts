import { useCallback, useRef } from 'react';

export function useDebounce<T extends unknown[]>(callback: (...args: T) => void, ms: number) {
  const timerId = useRef<ReturnType<typeof setTimeout>>();

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
