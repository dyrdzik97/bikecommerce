import { ParsedUrlQuery, parse as parseQuery } from 'querystring';

export const getQueryParams = (path: string): ParsedUrlQuery => {
  const [, queryParams] = path.split('?');

  return parseQuery(queryParams);
};
