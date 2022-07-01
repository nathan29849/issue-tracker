// boolean 상태를 true로 만들고,
// N초뒤에 다시 false로 만드는 핸들러를 디바운싱
import { useCallback, useEffect, useRef, useState } from 'react';

export function useDeferredVisibleUpdate(
  deps: unknown[],
  debounceDelay: number,
  visibleDelay: number,
) {
  const mount = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isElementVisible, setIsElementVisible] = useState(false);

  const handler = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsElementVisible(true);
    timerRef.current = setTimeout(
      () => setIsElementVisible(false),
      visibleDelay,
    );
  }, []);

  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
      return undefined;
    }
    setIsElementVisible(false);

    const timer = setTimeout(() => {
      handler();
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, deps);

  return { isElementVisible, setIsElementVisible };
}
