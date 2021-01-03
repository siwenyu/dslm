import React from 'react';

import Home from './page/Home';


// 二级页面列表页
import StuFairs from './page/SecFairs';
import StuXuanjianghui from './page/SecPreaches';
import StuZhaopinxinxi from './page/SecNotices';
import StuJobs from './page/SecJobs';
import StuWeijiuye from './page/StuWeijiuye';
import DetailPreach from './page/DetailPreach';

import NormalDetail from './page/NormalDetail';
import DetailGonggao from './page/DetailGonggao';
import DetailJob from './page/DetailJob';
import DetailNotice from './page/DetailNotice';



import Gonggao from './page/SecGonggao';
import SecOtherWeb from './page/SecOtherWeb';

// 详情页
import DetailFair from './page/DetailFair';
// 双选会参会单位展位
import CompanyHomeWithFairs from './page/CompanyHomeWithFairs';

// 合作伙伴
import Partners from './page/Partners';

export const routeList = [
    {
      title: '首页',
      path: '/home',
      pageComponent: () => {return <Home />},
      navData: [],
    },
    {
      title: '我是学生',
      path: '/fairs',
      pageComponent: StuFairs,
      navData: ['双选会'],
    },
    {
      title: '我是学生',
      path: '/xuanjianghui',
      pageComponent: StuXuanjianghui,
      navData: ['宣讲会'],
    },
    {
      title: '我是学生',
      path: '/zhaopinxinxi',
      pageComponent: StuZhaopinxinxi,
      navData: ['招聘信息'],
    },
    {
      title: '我是学生',
      path: '/secjobs',
      pageComponent: StuJobs,
      navData: ['职位信息'],
    },
    {
      title: '我是学生',
      path: '/weijiuye',
      pageComponent: StuWeijiuye,
      navData: ['微就业'],
    },
    {
      title: '我是学生',
      path: '/detailfair',
      pageComponent: DetailFair,
      navData: ['双选会', '双选会详情'],
    },
    {
      title: '我是学生',
      path: '/detailpreach',
      pageComponent: DetailPreach,
      navData: ['宣讲会', '宣讲会详情'],
    },
    {
      title: '详情',
      path: '/normaldetail',
      pageComponent: NormalDetail,
      navData: ['详情'],
    },
    {
      title: '通知公告',
      path: '/gonggao',
      pageComponent: Gonggao,
      navData: ['通知公告'],
    },
    {
      title: '就业新闻',
      path: '/xinwen',
      pageComponent: Gonggao,
      navData: ['就业新闻'],
    },
    {
      title: '通知公告详情',
      path: '/detailgonggao',
      pageComponent: DetailGonggao,
      navData: [],
    },
    {
      title: '我是学生',
      path: '/detailjob',
      pageComponent: DetailJob,
      navData: ['职位信息', '职位详情'],
    },
    {
      title: '我是学生',
      path: '/detailnotice',
      pageComponent: DetailNotice,
      navData: ['招聘信息', '招聘详情'],
    },
    {
      title: '合作伙伴',
      path: '/partners',
      pageComponent: Partners,
    },
    {
      title: '招聘详情',
      path: '/companyhomewithfairs',
      pageComponent: CompanyHomeWithFairs,
      navData: ['双选会', '参会单位'],
    },
    {
      title: '招聘详情',
      path: '/secotherweb',
      pageComponent: SecOtherWeb,
      navData: ['双选会', '参会单位'],
    },
  ];