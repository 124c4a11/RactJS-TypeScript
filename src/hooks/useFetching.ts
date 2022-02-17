import { useState } from "react";


export function useFetching(callback: (...args: any[]) => Promise<any>) {
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

  return [fetching, isLoading, error] as [(...args: any[]) => Promise<void>, boolean, string];
}
