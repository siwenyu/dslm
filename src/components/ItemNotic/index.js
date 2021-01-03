import React, { useState, Fragment } from 'react';

import './index.less';
import Item from 'antd/lib/list/Item';


const hot = require('../../assets/images/news-top.png');

export default function ItemNotic({
  data
}) {
  let headCount = 0;
  data.noticeJobs.forEach(element => {
    headCount += element.job.headCount;
  });
  data.headCount = headCount;
  return (
    <div className="zhaopin-wrap hover-item">
      <div className="zhaopin-item" onClick={() => {window.open(`/detailnotice?id=${data.noticeId}&headerNav=14&rightNav=10`)}}>
        <div className="zhaopin-item-title c-line-clamp1">
          <span>{data.name}</span>
        </div>
        <div className="zhaopin-item-tag c-line-clamp1">
          <div className="c-line-clamp1">
            {
              data.publishTime && (
                <Fragment>
                  {data.publishTime && data.publishTime.split(' ')[0]} &nbsp; &nbsp;
                </Fragment>
              )
            }
            {
              data.education && (
                <Fragment>
                  {data.education} &nbsp; &nbsp; &nbsp;
                </Fragment>
              )
            }
            
            {
             data.company && data.company.region && (
               <Fragment>
                 {data.company.region.city}&nbsp;&nbsp;&nbsp;
               </Fragment>
             )
            }

            {
             data.headCount > 0 && (
               <Fragment>
                  {data.headCount}人
               </Fragment>
             )
            }
            
            <span className="zhaopin-item-zhiweinum job">{data.noticeJobs && data.noticeJobs.length} 职位</span>
          </div>
          <div>{data.read}</div>
        </div>
      </div>
    </div>
  );
}