import React, { useState, Fragment } from 'react';

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function RiliItem({
  time, type
}) {
  const timeObj = new Date(new Date(time.replace(/-/g, "/")));
  
  const m = timeObj.getMonth() + 1;
  const d = timeObj.getDate();
  let h = timeObj.getHours();
  h = `${h}`.length > 1 ? h : `0${h}`;
  let mm = timeObj.getMinutes();
  mm = `${mm}`.length > 1 ? mm : `0${mm}`;
  return (
    <div className={`rili-item rili-item${type}`}>
      <div className="line-top"><div>{h}<span>:</span>{mm}</div></div>
      <div className="line"></div>
      <div className="line-bottom">
        <span>{m}月{d}日</span>
      </div>
    </div>
  );
}