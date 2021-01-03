import React, { useState, Fragment, useEffect } from 'react';

import { Table } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import ErjiDetailKeys from '../../components/ErjiDetailKeys';
import ErjiBtn from '../../components/ErjiBtn';
import SubmitResume from '../../components/SubmitResume';

import { getSecPreachDetail } from '../../../api/second';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

import { getParam } from '../../../utils/url';
import { render } from 'react-dom';

const columns = [
  {
    title: '职位名称',
    dataIndex: 'name',
    key: 'name',
  render: (text, record) => <a href={`/detailjob?id=${record.jobId}&rightNav=102&headerNav=13`}>{text}</a>
  },
  {
    title: '单位名称',
    dataIndex: 'unitName',
    key: 'unitName',
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
    render: () => <SubmitResume />
  },
];


export default function DetailPreach() {
  const [detail, setDetail] = useState({});
  const [listData, setListData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getData();
  }, [history]);

  const getData = () => {
    getSecPreachDetail({ preachId: getParam('id') }).then((res) => {
      if (res.data && res.data.preach) {
        const _data = res.data.preach;
        const _listData = [
          {
            key: '宣讲单位',
            value: (_data.company && _data.company.name) || '暂无',
            link: '',
            linkText: '',
          },
          {
            key: '宣讲时间',
            value: _data.preachDate ? `${_data.preachDate} ${_data.start}` : '暂无',
          },
          // {
          //   key: '所在学校',
          //   value: _data.school || '暂无',
          // },
          {
            key: '宣讲地点',
            value: (_data.place && _data.place.name) || '暂无',
          },
          // {
          //   key: '详情链接',
          //   value: '',
          // }
        ];
        setListData(_listData);

        _data.preachJobs.forEach(e => {
          e.unitName = _data.name;
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

  return (
    <Layout>
      <div className="erji preach-detail">
        <div className="right">
          <RightTopNav />
          <div className="normal-detail">
            <div className="erji-title">{detail.name}</div>
            <div className="gap-top-m erji-gray-bg-text">
              <span>{detail.publishTime}发布</span>
            </div>

            {/* 宣讲信息 */}
            {
              listData && listData.length > 0 && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">宣讲信息</div>
                  <div className="erji-shuoming-detail normal-row">
                    <div className="erji-list-wrap">
                      <ErjiDetailKeys list={listData} />
                    </div>
                    <SubmitResume text="立即报名" modalTitle="欢迎扫码报名参加宣讲会" />
                  </div>
                </Fragment>
              )
            }

            {/* 单位介绍 */}
            {
              detail.company && detail.company.profile && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">单位介绍</div>
                  <div className="gap-top-m pre-content" dangerouslySetInnerHTML={{__html: `${detail.company && detail.company.profile || ''}`}}></div>
                </Fragment>
              )
            }
            
            {/* 招聘简章 */}
            {
              detail.profile && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">招聘简章</div>
                  <div className="gap-top-m pre-content" dangerouslySetInnerHTML={{__html: `${detail.profile || ''}`}}></div>
                </Fragment>
              )
            }
            <br />
            {
              detail.attachments?.length > 0 && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title gap-bottom-s">相关附件</div>

                  <div className="erji-down">
                    {
                      detail.attachments.map((e) => {
                        return (
                          <Fragment>
                            <a key={e.url} href={e.url} className="erji-sub-title">{e.name}</a><br />
                          </Fragment>
                        )
                      })
                    }
                    
                  </div>
                </Fragment>
              )
            }
            <br />
            {/* 招聘职位 */}
            {
              detail.preachJobs && detail.preachJobs.length > 0 && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">
                    招聘职位
                    <span>{detail.preachJobs?.length || 0}</span>
                  </div>
                  <Table pagination={false} dataSource={detail.preachJobs} columns={columns} />
                </Fragment>
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}