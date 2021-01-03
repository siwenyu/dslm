import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import { getSecInfosDetail } from '../../../api/second';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

import { getParam } from '../../../utils/url';

export default function GonggaoDetail() {
  const [detail, setDetail] = useState({});

  const history = useHistory();

  useEffect(() => {
    getData();
  }, [history]);

  const getData = () => {
    getSecInfosDetail({ infoId: getParam('id') }).then((res) => {
      res.data && res.data.info && setDetail(res.data.info);
    });
  }

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

            {
              detail.subtitle && (
                <div className="erji-sub-title gap-top-l gap-bottom-m">
                  {detail.subtitle}
                </div>
              )
            }
            <div className="gap-top-m detail-text">
              <div className="pre-content" dangerouslySetInnerHTML={{__html: `${detail.content || ''}`}}></div>
            </div>

            {/* 图片 */}

            {/* {
              detail.picture && (
                <div>
                  <img src={detail.picture.url} alt="" />
                </div>
              )
            } */}

            {/* 相关附件 */}

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
            <br />
            <br />
            <br />

          </div>
        </div>
      </div>
    </Layout>
  );
}