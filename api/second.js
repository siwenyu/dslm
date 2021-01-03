import { post, get } from '../utils/request';

const baseUrl = "http://career.huanxizizai.com/";

// 获取信息
export const getSecInfos = (params) => {
  return get('api/web/infos', params);
}

// 公告详情
export const getSecInfosDetail = ({ infoId }) => {
  return get(`api/web/info/${infoId}`);
}

// 宣讲会查询
export const postSecPreaches = (params) => {
  return post(`api/web/preaches?page=${params.page}&pageSize=${params.pageSize}`, params);
}

// 招聘信息查询
export const postSecNotices = (params) => {
  return post(`api/web/notices?page=${params.page}&pageSize=${params.pageSize}`, params);
}

// 职位信息查询
export const postSecJobs = (params) => {
  return post(`api/web/jobs?page=${params.page}&pageSize=${params.pageSize}`, params);
}

export const getSecJobDetail = ({ jobId }) => {
  return get(`api/web/job/${jobId}`);
}

// 宣讲会详情
export const getSecPreachDetail = ({ preachId }) => {
  return get(`api/web/preach/${preachId}`);
}

// 双选会参会单位信息
export const getCompanyWithFair = ({ fairId, companyId }) => {
  return get(`api/web/fair/${fairId}/company/${companyId}`);
}

// 招聘信息详情
export const getSecNoticeDetail = ({ noticeId }) => {
  return get(`api/web/notice/${noticeId}`);
}

// 招聘单位详情
export const getSecUnitDetail = ({ preachId }) => {
  return get(`api/web/notice/${preachId}`);
}

// 获取单位性质
export const getSecCOM_NATURE = () => {
  return get(`api/web/common/param`, {type: 'COM_NATURE'});
};

// 地区
export const getSecRegions = () => {
  return get(`http://qiniu-career-public.huanxizizai.com/regions.json`);
};

// 行业
export const getSecIndustries = () => {
  return get(`http://qiniu-career-public.huanxizizai.com/industries.json`);
};

// 双选会列表
export const postSecFairs = (params) => {
  return post(`api/web/fairs?page=${params.page}&pageSize=${params.pageSize}`, params);
}

// 双选会详情
export const getSecFairDetail = ({ fairId }) => {
  return get(`api/web/fair/${fairId}`);
}

// 双选会详情获取职位列表
export const postSecJobsFromfair = (params) => {
  return post(`api/web/fair/${params.fairId}/companies?page=${params.page}&pageSize=${params.pageSize}`, params);
}

// 单位主页
export const getCompanyDetail = ({ companyId }) => {
  return get(`api/web/company/${companyId}`);
}

// 获取成员
export const getWorkers = () => {
  return get(`api/web/workers`);
}
