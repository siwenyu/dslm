export const loginType = [
  {
    text: '单位登录',
    color: '#7F8389',
    type: 1,
    icon: require('../../assets/images/business-icon.png'),
    link: 'http://careers.nenu.edu.cn/login/company',
  },
  {
    text: '学生登录',
    color: '#7F8389',
    type: 1,
    icon: require('../../assets/images/student-icon.png'),
    link: 'http://careers.nenu.edu.cn/login/student',
  },
];
  
export const navList = [
  {
    text: '首页',
    isActive: true,
    list: [],
    path: '/home'
  },
  {
    text: '双选会',
    isActive: false,
    path: '/fairs?secLNav=1&headerNav=11&activeKey=2&rightNav=5'
  },
  {
    text: '宣讲会',
    isActive: false,
    path: '/xuanjianghui?secLNav=1&headerNav=12&activeKey=1&rightNav=3'
  },
  {
    text: '招聘职位',
    isActive: false,
    path: '/secjobs?headerNav=13&rightNav=101'
  },
  {
    text: '在线招聘',
    isActive: false,
    list: [],
    path: 'zhaopinxinxi?headerNav=14&normal=true&secLNav=2&activeKey=1&rightNav=9'
  },
  {
    text: '东师就业中心网',
    isActive: false,
    list: [],
    path: 'http://career.nenu.edu.cn',
  },
]

// 显示二级
export const showSubNav = [
  '/student',
  '/unit',
]