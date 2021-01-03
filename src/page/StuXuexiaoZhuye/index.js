import React, { useState, useEffect, Fragment } from 'react';
import { RViewer, RViewerTrigger } from 'react-viewerjs';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

import ErjiDetailKeys from '../../components/ErjiDetailKeys';

import { getCompanyDetail } from '../../../api/second';
import { getParam } from '../../../utils/url';

const imgTexts = [
  '官方宣传片', '城市环境', '教学环境'
];

export default function StuXuexiaoZhuye() {

  const [detail, setDetail] = useState({});
  const [listData, setListData] = useState([]);
  const [jobData, setJobData] = useState(null);
  const [preachData, setpreachData] = useState(null);

  const history = useHistory();

  useEffect(() => {
    getData();
  }, [history]);

  const getData = () => {
    getCompanyDetail({ companyId: getParam('companyId') }).then((res) => {
      // 职位和宣讲会
      setJobData(res.data?.jobs?.length || 0);
      setpreachData(res.data?.preaches?.length || 0);
      const _data = res.data?.company || null;
      if (!_data) return;
      const  _industry = _data.industry || null;

      const _listData = [
        {
          key: '官网地址',
          value: _data.website || '暂无',
          link: _data.website || '',
          linkText: '',
        },
        {
          key: '领域',
          value: _industry ? (_industry.industryTiny || _industry.industrySmall || _industry.industryMiddle || _industry.industryBig) : '暂无',
        },
        {
          key: '规模',
          value: _data.staffs || '暂无',
        },
        {
          key: '单位性质',
          value: _data.nature?.name || '暂无',
        },
        {
          key: '地址',
          value: `${_data.address}`,
        }
      ];
      
      setListData(_listData);

      const pics = res.data?.company?.pictures;
      const _pics = [];
      if (pics) {
        pics.forEach(element => {
          _pics.push(element.url);
        });

        res.data.company.pics = _pics;
      }
      
      setDetail(res.data?.company || {});
    });
  }

  return (
    <Layout>
      <div className="erji">
        {/* <div>
          <LeftNav list={navLeftListXuexiao} firstText="学校主页" />
          <div className="gap-top-m">
            <ErjiMap />
          </div>
        </div> */}

        <div className="right">
          <RightTopNav />
          <div className="xuexiaozhuye-detail">
            <div className="erji-title">
            {detail.name}
            </div>
            <div className="company-info gap-top-m">
              <div className="company-logo gap-right-m">
                <img src={detail.logo?.url || window.defaultLogo} alt="" />
              </div>
              <div className="list">
                <ErjiDetailKeys list={listData} />
              </div>
            </div>

            <div className="gap-top-m erji-normal-title">单位简介</div>

            <div dangerouslySetInnerHTML={{__html: `${detail.profile || ''}`}} className="gap-top-m pre-content">
            </div>

            {
              detail.pictures && (
                <Fragment>
                  <div className="gap-top-m erji-normal-title gap-bottom-m">视频/图片</div>
                  <RViewer imageUrls={detail.pics}>
                    <div key={Math.random()} className="zhuye-img-list">
                      {detail.pictures.map((pic, index) => {
                        return (
                          <div className="zhuye-img-item" key={pic}>
                            <RViewerTrigger index={index}>
                              <img src={pic.url} alt="" />
                            </RViewerTrigger>
                            <span className="gap-top-s">{imgTexts[index]}</span>
                          </div>
                        )
                      })
                      }
                    </div>
                  </RViewer>
                </Fragment>
              )
            }

            <div className="gap-top-m erji-normal-title gap-bottom-m">招聘动态</div>

            <div className="zhuye-info-list">
              <div onClick={() => history.push(`/secjobs?secLNav=10&headerNav=11&companyName=${detail.name ? detail.name : ''}`)} className="zhuye-info-item">
                <div className="title1">{jobData}</div>
                <div className="text">在招职位</div>
              </div>
              <div onClick={() => history.push(`/xuanjianghui?secLNav=10&headerNav=12&companyName=${detail.name ? detail.name : ''}&rightNav=3`)} className="zhuye-info-item">
                <div className="title1">{preachData}</div>
                <div className="text">宣讲会</div>
              </div>
              <div className="zhuye-info-item">
                <div className="title2">建设中</div>
                <div className="text">远程面试</div>
              </div>
              <div className="zhuye-info-item">
                <div className="title2">建设中</div>
                <div className="text">历史签约</div>
              </div>
            </div>


            {/* <div className="gap-top-l erji-normal-title">相关附件</div>

            <div className="erji-down">
              <a href="" className="erji-sub-title">吉林医药学院2020届毕业生“24365”线上招聘月邀请函.doc</a><br />
              <a href="">吉林医药学院2020届毕业生“24365”线上招聘月邀请函.doc</a>
            </div>

            <div className="gap-top-l erji-normal-title">参会单位 <span>6</span></div> */}

          </div>
        </div>
      </div>
    </Layout>
  );
}