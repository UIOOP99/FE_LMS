import { MessageFilters, SearchQueryParams } from "constants/constants";
import { useQueryParam, StringParam } from "use-query-params";


//undefined is the default filter
export type MessageFilterQuery = string | undefined;

export interface IMessageFilter {
  title: string,
  query: MessageFilterQuery,
}

const useMessageFilter = (): [IMessageFilter, Function ] => {
  const [mq, setMq] = useQueryParam(SearchQueryParams.messageFilter, StringParam);
  const filter = Object.values(MessageFilters).find((filterObject) => filterObject.query === mq) || MessageFilters.all;
  return [filter, setMq];
};

export default useMessageFilter;