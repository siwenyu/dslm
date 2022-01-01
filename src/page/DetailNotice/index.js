import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Toast } from 'antd-mobile';

import Layout from '../../components/Layout';
import ErjiDetailKeys from '../../components/ErjiDetailKeys';
import SubmitResume from '../../components/SubmitResume';

import { getSecNoticeDetail } from '../../../api/second';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

import { getParam } from '../../../utils/url';


export default function DetailNotice() {
  const [detail, setDetail] = useState({});
  const [listData, setListData] = useState([]);
  const [listContactData, setListContactData] = useState([]);

  const history = useHistory();
  // Toast.info('This is a toast tips !!!', 1);

  useEffect(() => {
    getData();
    Toast.info(
      '21312',
      100000,
      null,
      true
    );
  }, [history]);

  const getData = () => {
    getSecNoticeDetail({ noticeId: getParam('id') }).then((res) => {
      if (res.data && res.data.notice) {
        const _data = res.data.notice;
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
            value: `${_data.company?.address || ''}`,
          }
        ];
        setListData(_listData);

        const _listContactData = [
          {
            key: '电话',
            value: _data.company?.contactTelephone && _data.company?.contactName ? `${_data.company?.contactTelephone || _data.company?.contactMobile} ${_data.company?.contactName}` : '暂无',
          },
          // {
          //   key: 'QQ',
          //   value: _data.company.qq || '暂无',
          // },
          {
            key: '邮箱',
            value: _data.company.contactEmail || '暂无',
          },
          {
            key: '地址',
            value: `${_data.company?.address || ''}`,
          },
          {
            key: '网站',
            value: _data.company?.website || '暂无',
          },
        ];
        setListContactData(_listContactData);
        setDetail(_data);
      }
      
      
      
    });
  }

  const btnClick = () => {
    window.open('http://careers.nenu.edu.cn/login/company');
  }

  return (
    <Layout>
      <div className="erji notice-detail">
        <div className="right">
          <RightTopNav />
          <div className="normal-detail">
            <div className="erji-title">{detail.name}</div>
            <div className="gap-top-m erji-gray-bg-text">
              <span>{detail.publishTime}发布</span>
            </div>

            {/* 宣讲信息 */}
            <div className="gap-top-l erji-normal-title">{detail.company?.name}</div>

            <div className="company-info">
              <div className="company-logo gap-right-m">
                <img src={detail.logo?.url || window.defaultLogo} alt="" />
              </div>
              <div className="list">
                <ErjiDetailKeys list={listData} />
              </div>
            </div>

            {/* 单位介绍 */}
            <div className="gap-top-l erji-normal-title">招聘情况</div>
            <div className="gap-top-m pre-content"  dangerouslySetInnerHTML={{__html: `${(detail.company && detail.company?.profile) || ''}`}}></div>

            {/* 招聘简章 */}
            {/* <div className="gap-top-l erji-normal-title">招聘对象</div>
            <div className="gap-top-m" dangerouslySetInnerHTML={{__html: `${detail.profile}`}}></div> */}

            {/* 招聘简章 */}
            <div className="gap-top-l erji-normal-title">联系我们</div>
            <div className="gap-top-m">
              <ErjiDetailKeys list={listContactData} />
            </div>

            {/* 招聘职位 */}
            <div className="gap-top-l erji-normal-title">
              招聘职位
              <span>{detail.noticeJobs && detail.noticeJobs.length}</span>
            </div>
            <div>
              <div className="list">
                {
                  detail.noticeJobs && detail.noticeJobs.map(e => {
                    return (
                      <div key={e.job?.jobId || e.job?.name} className="item">
                        <div className="item-info" onClick={() => window.open(`/detailjob?id=${e.jobId}&headerNav=13&rightNav=102&headerNav=13`)}>
                          <div className="before"></div>
                          <div className="title18">{e.job?.name}</div>
                          <span>{e.job?.kind?.kindSmall}{e.job?.kind?.kindBig}</span>
                          <span>{e.job?.education}</span>
                          <span>{e.job?.regions[0]?.city}</span>
                          {
                            e.job?.salaryMin > 0 && (
                              <span className="price">{e.job?.salaryMin}k - {e.job?.salaryMax}k</span>
                            )
                          }
                        </div>

                        <SubmitResume data={e.job} />
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}