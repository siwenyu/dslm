import React, { useState, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function ItemYuanxi({
  data
}) {
  const history = useHistory();
  const goPage = (e) => {
    window.open(`/normaldetail?headerNav=11&secLNav=11&id=${data.infoId}`);
  };

  return (
    <div onClick={goPage} className="shouxu-item c-line-clamp1">
      <div className="shouxu-item-icon"></div>
      <span>{data.title}</span>
    </div>
  );
}