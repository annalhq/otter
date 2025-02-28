import memoizeOne from 'memoize-one';

export const simpleUrl = memoizeOne(
  (url: string, withPath?: boolean): string => {
    let newUrl;
    try {
      newUrl = new URL(url);
    } catch (e) {
      return '';
    }
    const hostname = newUrl.hostname?.replace('www.', '');
    return withPath ? `${hostname}${newUrl.pathname}` : hostname;
  },
);
