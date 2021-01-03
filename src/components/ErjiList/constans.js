export const searchParamsPreaches = {
  mode: '',
  preachDate: '',
  company: {
    name: '',
    nature: {
      code: '',
    },
    industry: {
      industryBigCode: '',
      industryMiddleCode: '',
      industrySmallCode: '',
      industryTinyCode: '',
    },
    region: {
      provinceCode: '',
      cityCode: '',
      countryCode: '',
    }
  }
};

// {
//   mode: 'ONLINE/OFFLINE',
//   preachDate: '2020-09-05',
//   company: {
//       name: '公司名称',
//       nature: {
//           code: '单位性质代码'
//       },
//       industry: {
//           industryBigCode: '行业大类代码',
//           industryMiddleCode: '行业中类代码',
//           industrySmallCode: '行业小类代码',
//           industryTinyCode: '行业微类代码'
//       },
//       region: {
//           provinceCode: '省份代码',
//           cityCode: '城市代码',
//           countryCode: '区县代码'
//       }
//   }
// }

export const searchParamsNotices = {
  normal: true,
  company: {
    name: '',
    nature: {
      code: ''
    },
    industry: {
      industryBigCode: '',
      industryMiddleCode: '',
      industrySmallCode: '',
      industryTinyCode: ''
    },
    region: {
      provinceCode: '',
      cityCode: '',
      countryCode: ''
    }
  }
};

// export const searchParamsNotices = {
//   normal:  true,
//   company: {
//     name: '公司名称',
//     nature: {
//       code: '单位性质代码'
//     },
//     industry: {
//       industryBigCode: '行业大类代码',
//       industryMiddleCode: '行业中类代码',
//       industrySmallCode: '行业小类代码',
//       industryTinyCode: '行业微类代码'
//     },
//     region: {
//       provinceCode: '省份代码',
//       cityCode: '城市代码',
//       countryCode: '区县代码'
//     }
//   }
// };

// 查询职位
export const searchParamsJobs = {
  name: '',
  nature: '',
  series: {
    code: '',
  },
  normal: true,  // 是否教育类
  kind: {
    kindBig: '',
    kindSmall: ''
  },
  company: {
    name: '',
    nature: {
      code: ''
    },
    industry: {
      industryBigCode: '',
      industryMiddleCode: '',
      industrySmallCode: '',
      industryTinyCode: ''
    },
    region: {
      provinceCode: '',
      cityCode: '',
      countryCode: ''
    }
  }
}

// export const searchParamsJobs = {
//   name: '职位名称',
//   nature: {
//     code: '工作性质代码'
//   },
//   series: {
//     code: '工作类别代码'
//   },
//   normal: true,  // 是否教育类
//   kind: {
//     kindBig: '岗位大类',
//     kindSmall: '岗位小类'
//   },
//   company: {
//     name: '公司名称',
//     nature: {
//       code: '单位性质代码'
//     },
//     industry: {
//       industryBigCode: '行业大类代码',
//       industryMiddleCode: '行业中类代码',
//       industrySmallCode: '行业小类代码',
//       industryTinyCode: '行业微类代码'
//     },
//     region: {
//       provinceCode: '省份代码',
//       cityCode: '城市代码',
//       countryCode: '区县代码'
//     }
//   }
// }

export const searchParamsJobsFromFair = {
  company: {
    name: '',
    nature: {
      code: ''
    },
    industry: {
      industryBigCode: '',
      industryMiddleCode: '',
      industrySmallCode: '',
      industryTinyCode: ''
    },
    region: {
      provinceCode: '',
      cityCode: '',
      countryCode: ''
    }
  }
}

// export const searchParamsJobs = {
//   company: {
//     name: '公司名称',
//     nature: {
//       code: '单位性质代码'
//     },
//     industry: {
//       industryBigCode: '行业大类代码',
//       industryMiddleCode: '行业中类代码',
//       industrySmallCode: '行业小类代码',
//       industryTinyCode: '行业微类代码'
//     },
//     region: {
//       provinceCode: '省份代码',
//       cityCode: '城市代码',
//       countryCode: '区县代码'
//     }
//   }
// }
