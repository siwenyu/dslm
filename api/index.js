import { post, get } from '../utils/request';

const baseUrl = "http://career.huanxizizai.com/";

// 首页
export const getIndexRollings = (params) => {
  return get('api/web/index/rollings', params);
}

// 新闻
export const getIndexNews = (params) => {
  return get('api/web/index/infos', params);
};

// 日历
// start=20190901&end=20190930
export const getIndexRili = (params) => {
  return get('api/web/index/calendar', params);
};

// 双选会
// mode=ONLINE/OFFLINE&size=6
export const getIndexFairs = (params) => {
  return get('api/web/index/fairs', params);
};

// 招聘职位
// normal=true/false&size=6
export const getIndexJobs = (params) => {
  return get('api/web/index/jobs', params);
};

// 宣讲会
// mode=ONLINE/OFFLINE&size=6
export const getIndexPreaches = (params) => {
  return get('api/web/index/preaches', params);
};

// 招聘信息
// normal=true/false&size=6
export const getIndexNotices = (params) => {
  return get('api/web/index/notices', params);
};

// 获取合作伙伴
export const getIndexPartners = (params) => {
  return get('api/web/index/partners', { size: params.size || 1000 });
};

// 获取招聘信息列表
export const getIndexAllKindInfo = (params) => {
  return get('api/web/info/jobs', params);
};

// 获取招聘信息列表
export const getIndexAllKindInfoDetail = (params) => {
  return get(`api/web/info/job/${params.infoId}`, params);
};

