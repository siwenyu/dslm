import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import _ from 'lodash';

import './index.less';

import { navList, loginType, showSubNav } from './constants';


const subHot = require('../../assets/images/nav-hot.png');

const URLParse = require('url-parse');
const queryString = require('qs');

export default function Header() {

  const [nav, setNav] = useState([]);

  const history = useHistory();
  let location = useLocation();

  // 获取url高亮
  const urlObj = URLParse(window.location.href);
  const queryParams = queryString.parse(urlObj.query.replace('?', ''));
  let nowNavIndex = 0;
  if (queryParams.headerNav) {
    nowNavIndex = queryParams.headerNav - 10;
  }

  useEffect(() => {
    const navCopy = _.cloneDeepWith(navList);
    
    navCopy.forEach((e, index) => {
      if (index === nowNavIndex) {
        navCopy[index].isActive = true;
      } else {
        navCopy[index].isActive = false;
      }
    });
    setNav(navCopy);
  }, [location]);

  const login = (link) => {
    window.open(link);
  };

  const navClick = (e) => {
    if (e.text === '东师就业中心网') {
      window.open(e.path);
    } else {
      history.push(e.path);
    }
  };

  return (
    <div className="header-wrap">
      <div className="header">
        <div className="first-line">
          <div className="logo" onClick={() => history.push('/home')}></div>
          <div className="login">
            {
              loginType.map(e => {
                return (
                  <div key={e.text} onClick={() => login(e.link)} className="login-item">
                    <img alt="" src={e.icon} />
                    {e.text}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="nav">
        {
          nav.map(e => {
            return (
              <div
                key={e.text}
                onClick={() => navClick(e)}
                style={{ backgroundColor: e.color }}
                className={`nav-item ${e.isActive ? 'active': ''}`}
              >
                {e.text}
              </div>
            )
          })
        }
        </div>
    </div>
  );
}