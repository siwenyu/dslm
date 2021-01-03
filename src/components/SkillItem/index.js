import React, { useState, Fragment } from 'react';

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function SkillItem({
  data
}) {
  return (
    <div key={data.title} className="skill-item-wrap">
      <div className="skill-item" onClick={() => {window.open(data.link)}}>
        <img alt="" src={data.img} />
        <div className="skill-item-text">
          <div className="skill-item-title c-line-clamp2">
            {data.title}
          </div>
          <div className="skill-item-tag">
            <div>{data.time}</div>
            <div>{data.read}</div>
          </div>
        </div>
      </div>
    </div>
  );
}