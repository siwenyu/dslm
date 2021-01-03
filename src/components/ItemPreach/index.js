import React, { useState, Fragment } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";

import './index.less';

import RiliItem from '../RiliItem';

const hot = require('../../assets/images/news-top.png');

export default function PreachItem({
  data, rightNavType
}) {
  const history = useHistory();
  const itemClick = (e) => {
    window.open(`/detailpreach?id=${e.preachId}${rightNavType ? `&secRNav=${rightNavType}`: ''}&headerNav=12&name=${e.name}&rightNav=4`);
  };

  let headCount = 0;
  data.preachJobs && data.preachJobs.forEach(element => {
    headCount += element.job?.headCount;
  });
  data.headCount = headCount;
  return (
    <div key={data.name} className="preach-item hover-item" onClick={() => itemClick(data)}>
      <div>
        <div className="rili">
          <RiliItem time={`${data.preachDate} ${data.start}`} type={data.listWeight > 0 ? '1' : '2'} />
        </div>
        <div className="preach-item-title">
          <div className="c-line-clamp1">
            <div className="c-line-clamp1 pre-content title16" dangerouslySetInnerHTML={{__html: `${data.name}`}}></div>
            {
              data.isNew === 1 && (
                <div className="item-new">
                  new
                </div>
              )
            }
          </div>
          <div className="preach-item-tag">
            <div className="c-line-clamp1">
              {
                data.preachJobs && data.preachJobs.length > 0 && (
                  <span className="job">{ data.preachJobs.length } 职位&nbsp;&nbsp;&nbsp;</span>
                )
              }

              {
                data.headCount > 0 && (
                  <span>{ data.headCount } 人&nbsp;&nbsp;&nbsp;</span>
                )
              }
              <span>
                {data.mode === 'ONLINE'
                  ? '线上宣讲'
                  : (
                    data.place
                    ? `${data?.place?.name || ''}`
                    : ''
                  ) }
              </span>
            </div>
            {
              data.read && (
                <div>{data.read}</div>
              )
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}