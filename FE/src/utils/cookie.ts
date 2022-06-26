interface Options {
  [key: string]: string | boolean | Date;
}

export const setCookie = (
  key: string,
  value: string,
  options: Options = {},
) => {
  const opts: Options = { path: '/', ...options };

  if (opts.expires instanceof Date) {
    opts.expires = opts.expires.toUTCString();
  }

  let cookieStr = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

  Object.entries(opts).forEach(([optsKey, optsValue]) => {
    cookieStr += `; ${optsKey}`;
    if (optsValue !== true) {
      cookieStr += `=${optsValue}`;
    }
  });

  document.cookie = cookieStr;
};

export const getCookie = (key: string): string | undefined => {
  let result;
  const { cookie } = document;

  const cookieArr = cookie.split(';');

  cookieArr.some(cookieStr => {
    const cookieStrArr = cookieStr.trim().split('=');
    const [cookieKey, cookieValue] = [
      cookieStrArr[0],
      cookieStrArr.slice(1).join(''),
    ];

    if (cookieKey !== key) {
      return false;
    }

    result = cookieValue;
    return true;
  });

  return result;
};

interface DeleteCookieFn {
  (key: string): void;
  (keyArray: string[]): void;
}

const deleteCookieFnsMap = {
  deleteCookieByKey: (key: string) => {
    setCookie(key, '', { 'max-age': '-1' });
  },

  deleteCookieByKeyArray: (keyArray: string[]) => {
    keyArray.forEach((key: string) => setCookie(key, '', { 'max-age': '-1' }));
  },
};

export const deleteCookie: DeleteCookieFn = param => {
  const { deleteCookieByKey, deleteCookieByKeyArray } = deleteCookieFnsMap;
  if (typeof param === 'string') {
    deleteCookieByKey(param);
    return;
  }
  deleteCookieByKeyArray(param);
};
