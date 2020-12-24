import { useLocation } from "react-router-dom";

const useUrlQuery = (query: string): string | null => {
  const {search} = useLocation();
  return new URLSearchParams(search).get(query);
};

export default useUrlQuery;