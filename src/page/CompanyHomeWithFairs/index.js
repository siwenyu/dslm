import React, { useState, Fragment, useEffect } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import ErjiDetailKeys from '../../components/ErjiDetailKeys';
import SubmitResume from '../../components/SubmitResume';

import { getCompanyWithFair } from '../../../api/second';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

import { getParam } from '../../../utils/url';

const columns = [
  {
    title: '职位名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '需求人数',
    dataIndex: 'number',
    key: 'number',
    width: 100,
  },
  {
    title: '需求专业',
    dataIndex: 'major',
    key: 'major',
    width: 300,
  },
  {
    title: '投简历',
    dataIndex: 'jobId',
    key: 'jobId',
    width: 140,
    render: (data, record) => <SubmitResume data={record} />
  },
];

export default function CompanyHomeWithFairs() {
  const [detail, setDetail] = useState({});
  const [listData, setListData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getData();
  }, [history]);

  const getData = () => {
    getCompanyWithFair({ companyId: getParam('companyId'), fairId: getParam('fairId') }).then((res) => {
      if (res.data && res.data.fairCompany) {
        const _data = res.data.fairCompany;
        const  _industry = _data.company?.industry || null;
        const _listData = [
          {
            key: '官网地址',
            value: _data.company?.website || '暂无',
            link: _data.company?.website || '',
            linkText: '',
          },
          {
            key: '领域',
            value: _industry ? (_industry.industryTiny || _industry.industrySmall || _industry.industryMiddle || _industry.industryBig) : '暂无',
          },
          {
            key: '规模',
            value: _data.company.staffs || '暂无',
          },
          {
            key: '单位性质',
            value: _data.company.nature?.name || '暂无',
          },
          {
            key: '地址',
            value: `${_data.company?.address}`,
          }
        ];
        setListData(_listData);

        _data.fairJobs.forEach(e => {
          e.name = e.job.name;
          e.number = e.job.headCount || 0;
          
          // 专业
          if (e.job.allMajors) {
            e.major = '专业不限';
          } else {
            let majorArr = [];
            e.job.majors.forEach(item => majorArr.push(item.major || item.middleKind));
            e.major = `${majorArr.join('、')}`;
          }
        })
        setDetail(_data);
      }
    });
  }

  const btnClick = () => {
    window.open('');
  }

  return (
    <Layout>
      <div className="erji company-fairs-detail">
        <div className="right">
          <RightTopNav />
          <div className="normal-detail">
            <div className="erji-title">
              <span>{detail.company?.name}</span>
              {/* <div onClick={() => { window.open(`/xuexiaozhuye?headerNav=11&secLNav=11&companyId=${detail.company.companyId}`) }} className="more">
                <span>查看详细</span>
                <RightOutlined />
              </div> */}
            </div>
            <div className="company-info gap-top-m">
              <div className="company-logo gap-right-m">
                <img src={detail.logo?.url || window.defaultLogo} alt="" />
              </div>
              <div className="list">
                <ErjiDetailKeys list={listData} />
              </div>
            </div>
            
            {/* 招聘职位 */}
            <div className="gap-top-l erji-normal-title">
              招聘职位
              <span>{detail.fairJobs?.length || 0}</span>
            </div>

            <Table pagination={false} dataSource={detail.fairJobs} columns={columns} />

          </div>
        </div>
      </div>
    </Layout>
  );
}