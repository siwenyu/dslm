import React, { useState, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function ShouxuItem({
  data
}) {
  const history = useHistory();
  const goPage = (e) => {
    window.open(`/normaldetail?id=${data.infoId}&secLNav=10&headerNav=11`);
  };

  return (
    <div onClick={goPage} key={data.title} className="aq-item c-line-clamp1">
      <div className="aq-item-icon"></div>
      <span>{data.title}</span>
    </div>
  );
}