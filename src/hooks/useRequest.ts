import { useEffect, useState } from "react";

export function useRequest<T = unknown>(request: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    fetch(request)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return { data };
}
