import { RefObject, useEffect, useRef } from "react";


export function useObserver(
  ref: RefObject<any>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void
): void {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {

    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);

    if (ref.current) {
      observer.current.observe(ref?.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
}
