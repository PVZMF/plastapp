import { useEffect, useState } from "react";

export function useLoading() {
  const [loading, setLoading] = useState(false);
  return { loading, setLoading };
}
