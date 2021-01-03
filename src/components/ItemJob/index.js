import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import './index.less';

export default function ItemJob({
  data, type
}) {
  const history = useHistory();

  return (
    <div key={data.jobId} onClick={() => {window.open(`/detailjob?id=${data.jobId}&rightNav=102&headerNav=13`)}} className={`zhiwei-item-wrap ${type === 'sec' ? 'sec' : ''}`}>
      <div className="zhiwei-item hover-item">
        <img alt="" src={data?.company?.logo?.url || window.defaultLogo} />
        <div className="zhiwei-item-text">
          <div className="zhiwei-item-title">
            <div className="zhiwei-item-title-text c-line-clamp1">{data.name}</div>
            {
              data.salaryMin > 0 && (
                <span className="zhiwei-item-price">{data.salaryMin}K-{data.salaryMax}K</span>
              )
            }
          </div>
          <div className="zhiwei-item-tag">
            <div className="c-line-clamp1">
              {data.company && data.company.name}

              {
                data.company && data.company.name && data.education && (<span> | </span>)
              }
            
              {data.education}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}