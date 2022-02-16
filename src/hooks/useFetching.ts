import { useState } from "react";


export function useFetching(callback: () => Promise<any>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function fetching(): Promise<void> {
    try {
      setIsLoading(true);

      await callback();
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error] as [() => Promise<void>, boolean, string];
}
