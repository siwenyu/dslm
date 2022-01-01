import React, { useState, Fragment, useEffect } from 'react';
import { Cascader, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import Layout from '../Layout';
import ZhaopinItem from '../ZhaopinItem';

import { getParam } from '../../../utils/url';

import './index.less';
import LeftNav from '../LeftNav';
import RightTopNav from '../RightTopNav';

import { Form, Input, Select, Pagination } from 'antd';

import {
  getSecCOM_NATURE,
  getSecRegions,
  getSecIndustries,
  postSecPreaches,
} from '../../../api/second';

const { Option } = Select;

// 初始化
let searchParams = {
  company: {
    name: '',
    nature: {
      code: '',
    },
    industry: {},
    region: {},
  }
};

export default function StuXuanjianghui() {

  const history = useHistory();

  const [form] = Form.useForm();
  const [natureList, setNatureList] = useState([]);
  const [regions, setRegions] = useState([]);
  const [industriesList, setIndustriesList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [preachesList, setPreachesList] = useState([]);

  // 从url中获取参数
  searchParams.company.name = getParam('name') || '';
  searchParams.company.nature.code = getParam('nature') || '';



  // 获取所有筛选条件
  useEffect(() => {
    getCOM_NATURE();
    getRegions();
    getIndustries();
  }, [history]);

  // 初始化列表
  useEffect(() => {
    setTimeout(() => {
      onFormChange({});
    }, 200);
  }, [history]);

  // 获取性质
  const getCOM_NATURE = () => {
    getSecCOM_NATURE().then(res => {
      res.data && setNatureList(res.data.param);
    })
  }

  // 获取地区列表
  const getRegions = () => {
    getSecRegions().then(res => {
      
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
              })
            }
          })
        }
      })
      setRegions(res);
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
    })
  };

  // 搜索
  const onSearch = () => {
    onFormChange({ searchName });
  }
  
  const onFormChange = ({ searchName, page }) => {
    
    // 名字搜索不为空
    if (searchName) {
      searchParams.company.name = searchName;
    }
    const _params = form.getFieldValue();
    searchParams.company.nature.code = _params.nature;
    // 地区
    _params.region && _params.region.length > 0 &&_params.region.map((item, index) => {
      if (index === 0) {
        searchParams.company.region.provinceCode = _params.region[0];
      }
      if (index === 1) {
        searchParams.company.region.cityCode = _params.region[1];
      }
      if (index === 2) {
        searchParams.company.region.countryCode = _params.region[2];
      }
    });

    _params.industry && _params.industry.length > 0 &&_params.industry.map((item, index) => {
      if (index === 0) {
        searchParams.company.industry.industryBigCode = _params.industry[0];
      }
      if (index === 1) {
        searchParams.company.industry.industryMiddleCode = _params.industry[1];
      }
      if (index === 2) {
        searchParams.company.industry.industrySmallCode = _params.industry[2];
      }

      if (index === 3) {
        searchParams.company.industry.industryTinyCode = _params.industry[3];
      }
    });

    postSecPreaches({...searchParams, page: page || 1, pageSize: 10}).then(res => {
      setTotal(res.total);
      setPreachesList(res.preaches);
    });
  }

  // 地区选择
  const onRegionsChange = (data) => {
    console.log('onRegionsChange');
    console.log(data);
  }

  // 行业
  const onIndustriesChange = (data) => {
    console.log('onIndustriesChange');
    console.log(data);
  }

  // name
  const searchNamechange = (e, index) => {
    console.log(e);
    setSearchName(e.currentTarget.value);
  }

  // 翻页
  const onChange = (index) => {
    setPage(index);
    onFormChange({ page: index });
  };

  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />

          <div className="erji-form gap-bottom-s">
            <Form
              form={form}
              onValuesChange={() => onFormChange({})}
            >
              <div className="name">
                <Form.Item
                    name="name"
                  >
                  <Fragment>
                    <Input onChange={searchNamechange} value={searchName} placeholder="搜索单位名称" prefix={<SearchOutlined className="site-form-item-icon" />} />
                    <span onClick={onSearch} className="name-btn">搜索</span>
                  </Fragment>
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                    name="nature"
                  >
                  <Select listHeight={240} placeholder="性质">
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
                    name="region"
                  >
                  <Cascader options={regions} onChange={onRegionsChange} placeholder="地区" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                    name="industry"
                  >
                  <Cascader options={industriesList} onChange={onIndustriesChange} placeholder="行业" />
                </Form.Item>
              </div>
            </Form>
          </div>
          <div className="zhaopinxinxi-list">
            {
              (preachesList && preachesList.length > 0)
                ? preachesList.slice(0, 10).map((item, indexIndex) => {
                  item.riliType = indexIndex + 1;
                  item.riliType = item.riliType > 2 ? 2 : item.riliType;
                  item.riliType = item.riliType > 6 ? 3 : item.riliType;
                  return <ZhaopinItem key={item.noticeId || item.title} riliType={item.riliType} data={item} />
                })
                : <Empty />
            }
          </div>

          {
            preachesList && preachesList.length > 0 && (
              <Pagination pageSize={pageSize} defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
            )
          }
        </div>
      </div>
    </Layout>
  );
}