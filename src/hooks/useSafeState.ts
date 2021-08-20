import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

const useMounted = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
};

export default function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(initialState);

  const mountedRef = useMounted();
  const safeSetState: Dispatch<SetStateAction<S>> = useCallback(
    (updater) => {
      if (mountedRef.current) {
        setState(updater);
      }
    },
    [mountedRef],
  );

  return [state, safeSetState];
}
