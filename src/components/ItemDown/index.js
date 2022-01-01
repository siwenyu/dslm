import React, { useState, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function ShouxuItem({
  data
}) {
  const history = useHistory();
  const handleDown = () => {
    window.location.href = data.pdf.url;
  };

  return (
    <div onClick={handleDown} key={data.infoId || data.title} className="down-item">
      <div className="c-line-clamp1">
        {data.title}
      </div>
      <div className="down-btn">下载</div>
    </div>
  );
}