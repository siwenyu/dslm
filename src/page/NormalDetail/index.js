import React, { useState, Fragment, useEffect } from 'react';
import { Calendar } from 'antd';
import Slider from "react-slick";
import { RightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

import Layout from '../../components/Layout';
import ItemPreach from '../../components/ItemPreach';

import './index.less';
import RightTopNav from '../../components/RightTopNav';
import ErjiBtn from '../../components/ErjiBtn';

import ErjiMap from '../../components/ErjiMap';
import ErjiNearlySxh from '../../components/ErjiNearlySxh';
import { getParam } from '../../../utils/url';

import { getSecInfosDetail } from '../../../api/second';
import { getIndexAllKindInfoDetail } from '../../../api/index';


const stuJiangzuo = require('../../assets/images/stu-icon1.png');
const stuJiangzuoBanner = require('../../assets/images/class-banner.png');
const prizeIcon = require('../../assets/images/jiuye-icon1.png');
const downIcon = require('../../assets/images/normal-down.png');

export default function NormalDetail() {

  const [detail, setDetail] = useState({});

  useEffect(() => {
    if (getParam('datatype') === 'gonggao') {
      getSecInfosDetail({ infoId: getParam('id') }).then(res => {
        setDetail(res.data?.info || {});
      });
    } else {
      getIndexAllKindInfoDetail({ infoId: getParam('id') }).then(res => {
        setDetail(res.data?.job || {});
      });
    }
    
  }, []);

  return (
    <Layout>
      <div className="erji erji-shouxu">
        <div className="right">
          <RightTopNav />
          <div className="normal-detail">
            <div className="erji-title">{detail.title}</div>
            <div className="gap-top-m erji-gray-bg-text">
              <span>{detail.publishDate}发布</span>
              {/* <span>10万+阅读</span> */}
            </div>

            <div className="erji-sub-title gap-top-l gap-bottom-m">{detail.subtitle}</div>

            <div className="pre-content" dangerouslySetInnerHTML={{__html: `${detail.content || ''}`}}></div>

            {/* 相关附件 */}
            {
              detail.attachments && (
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
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}