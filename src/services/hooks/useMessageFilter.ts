import { IMessageFilter, MessageFilters, SearchQueryParams } from "constants/constants";
import { useLocation } from "react-router-dom";

const useMessageFilter = (): IMessageFilter => {
  const {search} = useLocation();
  const filter = new URLSearchParams(search).get(SearchQueryParams.messageFilter);
  return Object.values(MessageFilters).find((filterObject) => filterObject.query === filter) || MessageFilters.all;
};

export default useMessageFilter;