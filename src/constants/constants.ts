import { IMessageFilter } from "services/hooks/useMessageFilter";

export const SearchQueryParams = {
  messageFilter: 'message-filter',
};

export const MessageFilters: Record<string, IMessageFilter> = {
  all: {title: 'همه', query: undefined},
  message: {title: 'پیام', query: 'message'},
  assignment: {title: 'تکلیف', query: 'assignment'},
};