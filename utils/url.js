import * as qs from 'qs';

const defaultUrl = window.location.href;

export const getParam = (param) => {
  const paramsString = window.location.href.split('?')[1] || {};
  return qs.parse(paramsString)[param] || null;
};
