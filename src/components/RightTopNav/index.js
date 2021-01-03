import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import { routeList } from '../../router';
import './index.less';


import { rightNavs } from '../../config/index';

import { getParam } from '../../../utils/url';

const { pathToRegexp } = require("path-to-regexp");
const URLParse = require('url-parse');
const queryString = require('qs');

export default function RightTopNav({
  // list
}) {
  const location = useLocation();
  const rightNav = getParam('rightNav');

  const [navData, setNavData] = useState([]);
  useEffect(() => {
    if (rightNavs[rightNav]) {
      setNavData(rightNavs[rightNav].split(','));
    }

    // 滚动到顶部
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }, [location]);

  return (
    <div className="right-top-nav">
      <span>
        首页 &nbsp; 
        {
          navData.length > 0 && (
            navData.map(e => {
            return <span key={e}> / &nbsp;{e}</span>;
            })
          )
        }
      </span>
    </div>
  );
}