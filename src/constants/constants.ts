export const SearchQueryParams = {
  messageFilter: 'message-filter',
};

export interface IMessageFilter {
  title: string,
  query: string,
}

export const MessageFilters: Record<string, IMessageFilter> = {
  all: {title: 'همه', query: 'all'},
  message: {title: 'پیام', query: 'message'},
  assignment: {title: 'تکلیف', query: 'assignment'},
};