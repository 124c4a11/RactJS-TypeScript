import { useMemo } from "react";


export function usePagination(totalPages: number): number[] {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let pagesArr: number[] = [];

  useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      pagesArr.push(i + 1);
    }
  }, [totalPages, pagesArr]);

  return pagesArr
}
