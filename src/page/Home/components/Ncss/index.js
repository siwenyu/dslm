import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import ncssImg from '../../../../assets/images/ncss-logo.png';

import './index.less';

export default function Ncss({
  // newsList
}) {
  const history = useHistory();

  const clickhandle = (e) => {
    window.open('https://www.ncss.cn');
  };

  return (
    <div className="ncss">
      <div className="home-title">全国统一就业平台</div>
      <img onClick={clickhandle} src={ncssImg} alt="" />
    </div>
  );
}