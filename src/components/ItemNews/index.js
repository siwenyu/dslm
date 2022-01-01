import React, { useState, Fragment } from 'react';

import './index.less';

const hot = require('../../assets/images/news-top.png');
const nothot = require('../../assets/images/news-normal.png');

export default function ItemNews({
  data, hasBefore, hasTime, beforeType, onClick, pathName
}) {
  const handleClick = () => {
    if (onClick) {
      onClick(data);
    } else {
      window.open(`/${pathName}?id=${data.infoId}&datatype=gonggao&rightNav=2`);
    }
  }
  return (
    <div
      onClick={handleClick}
      key={data.infoId || data.title}
      className={`news-item hover-item ${data.indexWeight > 0 ? 'news-item-ishot' : ''} news-item-before${beforeType}`}
    >
      <div className="c-line-clamp1">
        {
          hasBefore && beforeType === 2 && (
            <div className="ishot">
              {
                data.indexWeight > 0
                ? <img alt="" src={hot} />
                : <img alt="" src={nothot} />
              }
            </div>
          )
        }

        {
          hasBefore && beforeType === 1 && (
            <div className="item-before">
            </div>
          )
        }
        
        <div className="title c-line-clamp1">
          {data.title}
        </div>
      </div>

      {
        hasTime && (
          <div className="time">
            {data.time || data.publishDate}
          </div>
        )
      }
    </div>
  );
}