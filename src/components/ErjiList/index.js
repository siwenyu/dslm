import React, { useState, Fragment, useEffect } from 'react';
import { Menu, Empty, TreeSelect } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import ZhaopinItem from '../ItemNotic';
import ItemPreach from '../ItemPreach';
import ZhiweiItem from '../ItemJob';
import ItemJobWithFair from '../ItemJobWithFair';

import { getParam } from '../../../utils/url';

import './index.less';

import { Form, Input, Select, Pagination } from 'antd';
import {
  searchParamsPreaches,
  searchParamsNotices,
  searchParamsJobs,
  searchParamsJobsFromFair,
} from './constans';

import {
  getSecCOM_NATURE,
  getSecRegions,
  getSecIndustries,
  postSecPreaches,
  postSecNotices,
  postSecJobs,
  postSecJobsFromfair,
} from '../../../api/second';

import searchIcon from '../../assets/images/search-icon.png';

const { Option } = Select;


export default function ErjiList({
  type, onSearchChange, isShowList
}) {
  const history = useHistory();

  const [form] = Form.useForm();
  const [natureList, setNatureList] = useState([]);
  const [regions, setRegions] = useState([]);
  const [industriesList, setIndustriesList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [list, setList] = useState([]);
  const [valueMap, setValueMap] = useState([]);
  const [hangyeValueMap, setHangyeValueMap] = useState([]);
  const [regionsSelect, setRegionsSelect] = useState([]);
  const [hangyeSelect, setHangyeSelect] = useState([]);

  // 获取所有筛选条件
  useEffect(() => {
    getCOM_NATURE();
    getRegions();
    getIndustries();
  }, [history]);

  const regionsRes = {};
  const hangyeRes = {};

  const getPath = (value) => {
    const path = [];
    let current = valueMap[value];
    while (current) {
      path.unshift(current.value);
      current = current.parent;
    }
    return path;
  }

  const loops = (list, parent) => {
    return (list || []).map(({ children, value }) => {
      const node = (regionsRes[value] = {
        parent,
        value
      });
      node.children = loops(children, node);
      return node;
    });
  }

  const getPathHangye = (value) => {
    const path = [];
    let current = hangyeValueMap[value];
    while (current) {
      path.unshift(current.value);
      current = current.parent;
    }
    return path;
  }

  const loopsHangye = (list, parent) => {
    return (list || []).map(({ children, value }) => {
      const node = (hangyeRes[value] = {
        parent,
        value
      });
      node.children = loopsHangye(children, node);
      return node;
    });
  }

  // 初始化列表
  useEffect(() => {
    setTimeout(() => {
      onFormChange({});
    }, 200);
  }, [history]);

  // 搜索入参
  let searchParams = {};
  if (type === 'preaches') {
    searchParamsPreaches.preachDate = getParam('date');
    if (getParam('companyName')) {
      searchParamsPreaches.company.name = getParam('companyName');
    }
    searchParams = searchParamsPreaches;
  }
  if (type === 'notices') {
    searchParams = searchParamsNotices;
  }
  if (type === 'jobs') {
    if (getParam('companyName')) {
      searchParamsJobs.company.name = getParam('companyName');
    }
    searchParams = searchParamsJobs;
  }
  if (type === 'jobsFair') {
    searchParamsJobsFromFair.fairId = getParam('id');
    searchParams = searchParamsJobsFromFair;
  }

  // 获取性质
  const getCOM_NATURE = () => {
    if (type === 'jobs') {
      setNatureList([
        {
          code: '全职',
          name: '全职',
        },
        {
          code: '兼职',
          name: '兼职',
        },
        {
          code: '实习',
          name: '实习',
        },
      ])
    } else {
      getSecCOM_NATURE().then(res => {
        res.data && setNatureList(res.data.param);
      })
    }
    
  }

  // 获取地区列表
  const getRegions = () => {
    getSecRegions().then(res => {
      res.map(item => {
        item.value = item.code;
        item.label = item.name;
        item.title = item.name;
        item.key = item.code;

        if (item.children && item.children.length > 0) {
          item.children.map(itemItem => {
            itemItem.value = itemItem.code;
            itemItem.label = itemItem.name;
            itemItem.title = itemItem.name;
            itemItem.key = itemItem.code;

            if (itemItem.children && itemItem.children.length > 0) {
              itemItem.children.map(itemItemItem => {
                itemItemItem.value = itemItemItem.code;
                itemItemItem.label = itemItemItem.display;
                itemItemItem.title = itemItemItem.display;
                itemItemItem.key = itemItemItem.code;
              })
            }
          })
        }
      })
      setRegions(res);
      loops(res);
      setValueMap(regionsRes);
    })
  }

  // 获取行业
  const getIndustries = () => {
    getSecIndustries().then(res => {
      res.map(item => {
        item.value = item.code;
        item.label = item.name;

        if (item.children && item.children.length > 0) {
          item.children.map(itemItem => {
            itemItem.value = itemItem.code;
            itemItem.label = itemItem.name;

            if (itemItem.children && itemItem.children.length > 0) {
              itemItem.children.map(itemItemItem => {
                itemItemItem.value = itemItemItem.code;
                itemItemItem.label = itemItemItem.name;

                if (itemItemItem.children && itemItemItem.children.length > 0) {
                  itemItemItem.children.map(itemItemItemItem => {
                    itemItemItemItem.value = itemItemItemItem.code;
                    itemItemItemItem.label = itemItemItemItem.name;
                  })
                }
              })
            }
          })
        }
      })

      setIndustriesList(res);
      loopsHangye(res);
      setHangyeValueMap(hangyeRes);
    })
  };

  // 搜索
  const onSearch = () => {
    onFormChange({ searchName });
  }
  
  const onFormChange = ({ searchName, page, regionsSelectNow, hangyeSelectNow }) => {
    // 名字搜索不为空
    if (searchName || searchParams.company.name) {
      searchParams.company.name = searchName || searchParams.company.name;
    } else {
      searchParams.company.name = '';
    }
    const _params = form.getFieldValue();
    // 如果是职位搜索，则是全职、兼职、实习
    if (type === 'jobs') {
      searchParams.nature = _params.nature;
    } else {
      searchParams.company.nature.code = _params.nature;
    }
    // 地区
    const _diqu = regionsSelectNow || regionsSelect;
    if (regionsSelectNow && regionsSelectNow.length === 0) {
      searchParams.company.region = {
        provinceCode: '',
        cityCode: '',
        countryCode: '',
      }
    } else {
      _diqu.map((item, index) => {
        if (index === 0) {
          searchParams.company.region.provinceCode = item;
        }
        if (index === 1) {
          searchParams.company.region.cityCode = item;
        }
        if (index === 2) {
          searchParams.company.region.countryCode = item;
        }
      });
    }

    const _hangye = hangyeSelectNow || hangyeSelect;

    if (hangyeSelectNow && hangyeSelectNow.length === 0) {
      searchParams.company.industry = {
        industryBigCode: '',
        industryMiddleCode: '',
        industrySmallCode: '',
        industryTinyCode: '',
      }
    } else {
      _hangye.map((item, index) => {
        if (index === 0) {
          searchParams.company.industry.industryBigCode = item;
        }
        if (index === 1) {
          searchParams.company.industry.industryMiddleCode = item;
        }
        if (index === 2) {
          searchParams.company.industry.industrySmallCode = item;
        }
  
        if (index === 3) {
          searchParams.company.industry.industryTinyCode = item;
        }
      });
    }
    

    // 识别类型
    getApi()({ ...searchParams, page: page || 1, pageSize: type === 'jobsFair' ? 20 : 10 }).then(resData => {
      const res = resData.data || {};
      setTotal(res.total);

      let _list = [];
      if (type === 'preaches') {
        _list = res.preaches;
      }
      if (type === 'notices') {
        _list = res.notices;
      }
      if (type === 'jobs') {
        _list = res.jobs;
      }
      if (type === 'jobsFair') {
        _list = res.fairCompanies;
      }

      onSearchChange && onSearchChange(_list);
      setList(_list);
    });
  }

  const getApi = () => {
    switch (type) {
      case 'preaches':
        return postSecPreaches;
      case 'notices':
        return postSecNotices;
      case 'jobs':
        return postSecJobs;
      case 'jobsFair':
        return postSecJobsFromfair;
    }
  };

  // 地区选择
  const onRegionsChange = (data, index) => {
    setRegionsSelect(getPath(data));
    setTimeout(() => {
      onFormChange({ regionsSelectNow: getPath(data) });
    }, 200);
  }

  // 行业
  const onIndustriesChange = (data) => {
    setHangyeSelect(getPathHangye(data));
    setTimeout(() => {
      onFormChange({ hangyeSelectNow: getPathHangye(data) });
    }, 200);
  }

  // name
  const searchNamechange = (e, index) => {
    setSearchName(e.currentTarget.value);
  }

  // 翻页
  const onChange = (index) => {
    setPage(index);
    onFormChange({ page: index });
  };

  return (
    <Fragment>
      <div className="erji-form">
        <Form
          form={form}
          onValuesChange={() => onFormChange({})}
        >
          <div className="name">
            <Form.Item
                name="name"
              >
              <Fragment>
                <img className="search-icon" src={searchIcon} alt="" />
                <Input onPressEnter={onSearch} onChange={searchNamechange} value={searchName} placeholder="搜索单位名称" prefix={<div className="search-icon"></div>} />
                <span onClick={onSearch} className="name-btn">搜索</span>
              </Fragment>
            </Form.Item>
          </div>
          <div className="form-item xingzhi">
            <Form.Item
                name="nature"
              >
              <Select allowClear listHeight={240} placeholder="性质">
                {
                  natureList.map(e => {
                    return <Option value={e.code} key={e.code}>{e.name}</Option>
                  })
                }
              </Select>
            </Form.Item>
          </div>
          <div className="form-item">
            <Form.Item
                // name="region"
              >
              {/* <Cascader options={regions} onChange={onRegionsChange} placeholder="地区" /> */}
              <TreeSelect
                allowClear
                style={{ width: '100%' }}
                // value={form.getFieldValue().region}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={regions}
                placeholder="地区"
                // treeDefaultExpandAll
                onChange={onRegionsChange}
              />
            </Form.Item>
          </div>
          <div className="form-item">
            <Form.Item
                // name="industry"
              >
              <TreeSelect
                allowClear
                style={{ width: '100%' }}
                // value={form.getFieldValue().region}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={industriesList}
                placeholder="行业"
                // treeDefaultExpandAll
                onChange={onIndustriesChange}
              />
              {/* <Cascader options={industriesList} onChange={onIndustriesChange} placeholder="行业" /> */}
            </Form.Item>
          </div>
        </Form>
      </div>
      {
        isShowList && (
          <div className={`erjilist-list ${type}-list`}>
            {
              (list && list.length > 0)
                ? list.slice(0, type === 'jobsFair' ? 20 : 10).map((item, indexIndex) => {
                  switch (type) {
                    case 'preaches':
                      return <ItemPreach key={item.title} riliType={item.riliType} data={item} />;
                    case 'notices':
                      return <ZhaopinItem key={item.title} riliType={item.riliType} data={item} />;
                    case 'jobs':
                      return <ZhiweiItem key={item.title} riliType={item.riliType} data={item} />;
                    case 'jobsFair':
                      return (
                        <Fragment>
                          <ItemJobWithFair key={item.title} riliType={item.riliType} data={item} />
                        </Fragment>
                      );
                  }
                  return <ZhaopinItem key={item.title} riliType={item.riliType} data={item} />
                })
                : <Empty />
            }
          </div>
        )
      }

      {
        list && list.length > 0 && isShowList && (
          <Pagination pageSize={`${type === 'jobsFair' ? 20 : 10}`} defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
        )
      }
    </Fragment>
  );
}