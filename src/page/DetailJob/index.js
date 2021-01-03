import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

import Layout from '../../components/Layout';
import ErjiDetailKeys from '../../components/ErjiDetailKeys';
import SubmitResume from '../../components/SubmitResume';

import { getSecJobDetail } from '../../../api/second';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

import { getParam } from '../../../utils/url';

export default function DetailJob() {
  const [detail, setDetail] = useState({});
  const [listData, setListData] = useState([]);
  const [listContactData, setListContactData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getData();
  }, [history]);

  const getData = () => {
    getSecJobDetail({ jobId: getParam('id') }).then((res) => {
      if (res.data && res.data.job) {
        const _data = res.data.job;
        // 专业
        let _majors = '';
        _data.majors.forEach((element, index) => {
          _majors += element.major;
          if ( index> 0) {
            _majors += '/';
          }
        });
        _data.majors = _majors;
        const _listData = [
          {
            key: '职位类型',
            value: _data.series.name,
          },
          {
            key: '所需专业',
            value: _data.allMajors === true ? '不限专业' : `${_data.majors}`,
          },
          {
            key: '工作地点',
            value: _data.allRegions === true ? '全国' : `${_data.company?.region?.city || _data.company?.region?.province}`,
          },
          {
            key: '学历要求',
            value: _data.education || '暂无',
          },
          {
            key: '招聘人数',
            value: _data.headCount || '暂无',
          },
        ];
        setListData(_listData);

        // _data.tag = [21321,12312];
        
        setDetail(_data);
      }
      
      
      
    });
  }

  const btnClick = () => {
    window.open('http://careers.nenu.edu.cn/login/company');
  }

  return (
    <Layout>
      <div className="erji job-detail">
        <div className="right">
          <RightTopNav />
          <div className="normal-detail">
            <div className="erji-title">{detail.name}</div>
            <div className="gap-top-m erji-gray-bg-text">
              <span>{detail.publishTime}发布</span>
            </div>

            <div className="detail-wrap">
              <div className="">
                <div className="title18">{detail.company?.name}</div>
                <div className="">{detail.company?.address}</div>
              </div>
              {/* <div onClick={() => window.open(`/xuexiaozhuye?headerNav=11&secLNav=11&companyId=${detail.company?.companyId}`)} className="link">查看详细 <RightOutlined /></div> */}
            </div>

            {/* 职位亮点 */}
            {
              detail.tag && detail.tag.length > 0 && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">职位亮点</div>
                  <div className="gap-top-m liangdian-list">
                    {
                      detail.tag.map(e => {
                        return (
                          <div className="item">
                            <div className="before"></div>
                            <div className="title">{e}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </Fragment>
              )
            }

            {/* 职位情况 */}
            <div className="gap-top-l erji-normal-title">职位情况</div>
            <div className="gap-top-m">
              <ErjiDetailKeys list={listData} />
            </div>

            {/* 岗位职责 */}
            {
              detail.requirements && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">岗位职责</div>
                  <div className="gap-top-m pre-content" dangerouslySetInnerHTML={{__html: `${detail.duties || ''}`}}></div>
                </Fragment>
              )
            }

            {/* 职位要求 */}
            {
              detail.requirements && (
                <Fragment>
                  <div className="gap-top-l erji-normal-title">职位要求</div>
                  <div className="gap-top-m pre-content" dangerouslySetInnerHTML={{__html: `${detail.requirements || ''}`}}></div>
                </Fragment>
              )
            }
          </div>
          <br />
          <br />

          <SubmitResume />
        </div>
      </div>
    </Layout>
  );
}