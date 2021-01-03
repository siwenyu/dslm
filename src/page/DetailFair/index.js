import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

import Layout from '../../components/Layout';
import ErjiList from '../../components/ErjiList';

import './index.less';
import RightTopNav from '../../components/RightTopNav';
import ErjiBtn from '../../components/ErjiBtn';
import { getSecFairDetail } from '../../../api/second';
import { getParam } from '../../../utils/url';
import { numberToArray } from '../../../utils/normal';
import SubmitResume from '../../components/SubmitResume';

import hideImg from '../../assets/images/fairs-hide.jpeg';

import './index.less';

export default function Fairs() {

  const [detail, setDetail] = useState({});

  const history = useHistory();

  useEffect(() => {
    getData();
  }, [history]);

  const getData = () => {
    getSecFairDetail({ fairId: getParam('id') }).then((res) => {
      setDetail(res?.data?.fair || []);
    });
  };

  const clickHandleUnit = () => {
    window.open('http://careers.nenu.edu.cn/login/company');
  };

  return (
    <Layout>
      <div className="erji page-fairdetail">
        <div className="right">
          <div className="fairdetail">
            <div className="top">
              <div className="top-nav">
                <RightTopNav />
                {/* <div>
                  <span>分享 2313</span>
                  <span>浏览 2313</span>
                </div> */}
              </div>

              <div className="top-detail normal-row">
                <div>
                  {
                    detail.name && (
                      <div className="title1 title30">{detail.name}</div>
                    )
                  }
                  {
                    detail.summary && (
                      <div className="title2 title18 gap-top-m pre-content" dangerouslySetInnerHTML={{__html: `${detail.summary}`}}></div>
                    )
                  }
                </div>
                <div className="normal-col fairdetail-btns">
                  <SubmitResume text="单位报名" clickHandle={clickHandleUnit} isShowIcon={true}/>
                  <SubmitResume text="学生报名" modalTitle="欢迎扫码报名参加双选会" isShowIcon={true}/>
                </div>
              </div>

              <div className="top-info">
                <div>
                  {
                    detail.hostName && (
                      <span>主办单位：{detail.hostName}</span>
                    )
                  }
                  {
                    detail.organizer && (
                      <span>承办单位：{detail.organizer}</span>
                    )
                  }
                  {
                    detail.assistOrganizer && (
                      <span>协办单位：{detail.assistOrganizer}</span>
                    )
                  }
                </div>
                <div className="info-time">
                  持续时间：{detail.start}～{detail.until}
                </div>
              </div>

              <div className="num-info">
                <div className="num-item">
                  <span>参会单位</span>
                  <div className="info-number">{numberToArray(detail.shown ? (detail?.companyCount || 0) : 0).map((e) => {
                    return <div key={Math.random()} className="info-number-item">{e}</div>
                  })}</div>
                  <span>个</span>
                </div>
                {/* <div className="num-item">
                  <span>招聘职位</span>
                  <div className="info-number">{numberToArray(detail.shown ? (detail?.jobCount || 0) : 0).map((e) => {
                    return <div key={Math.random()}  className="info-number-item">{e}</div>
                  })}</div>
                  <span>个</span>
                </div> */}
                <div className="num-item">
                  <span>招聘岗位</span>
                  <div className="info-number">{numberToArray(detail.shown ? (detail?.headCount || 0) : 0).map((e) => {
                    return <div key={Math.random()}  className="info-number-item">{e}</div>
                  })}</div>
                  <span>个</span>
                </div>
              </div>

              {
                detail.shown
                  ? (
                    <div className="info-search">
                      <ErjiList
                        type="jobsFair"
                        isShowList={detail.shown}
                      />
                    </div>
                  )
                  : (
                    <div className="jobsFair-not-show">
                      <img src={hideImg} alt="" />
                      优质单位正在报名参会，敬请期待
                    </div>
                  )
              }
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}