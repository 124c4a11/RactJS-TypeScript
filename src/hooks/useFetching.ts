import { useState } from "react";


type CallbackType = (...args: any[]) => Promise<void>;

type UseFetchingType = [CallbackType, boolean, string];


export function useFetching(callback: CallbackType): UseFetchingType {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function fetching(...args: any[]): Promise<void> {
    try {
      setIsLoading(true);

      await callback(...args);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}
