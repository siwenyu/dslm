import React, { useState, Fragment } from 'react';

import './index.less';

const hot = require('../../assets/images/news-top.png');
const nothot = require('../../assets/images/news-normal.png');

export default function ItemLikeNew({
  data, hasBefore, hasTime, beforeType, onClick, pathName, rightNav,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick(data);
    } else {
      window.open(`/${pathName}?id=${data.infoId}&rightNav=${rightNav}`);
    }
  }
  return (
    <div
      onClick={handleClick}
      key={data.title}
      className={`news-item news-item-like hover-item ${data.listWeight > 0 ? 'news-item-ishot' : ''} news-item-before${beforeType}`}
    >
      <div className="c-line-clamp1">
        {
          <div className="ishot">
            {
              data.listWeight > 0
              ? <img alt="" src={hot} />
              : <img alt="" src={nothot} />
            }
          </div>
        }
        
        <div className="title c-line-clamp1">
          {data.title}
        </div>

        {/* 来源 */}
        <div className="tag">
          {data.source}
        </div>

        {/* 是否是new */}
        {
          data.isNew === 1 && (
            <div className="item-new">
              new
            </div>
          )
        }
        
      </div>

      {
        hasTime && (
          <div className="time">
            {data.publishDate}
          </div>
        )
      }
    </div>
  );
}