import { parse as parseQuery } from 'querystring';

export const getQueryParams = (path: string): any => {
  const [, queryParams] = path.split('?');

  return parseQuery(queryParams);
};
