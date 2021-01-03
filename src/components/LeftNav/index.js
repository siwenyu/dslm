import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
import _ from 'lodash';

import {
  leftNav1,
  leftNav2,
  leftNav3,
} from '../../assets/constants';

import { getParam } from '../../../utils/url';
import './index.less';

const { pathToRegexp } = require("path-to-regexp");

export default function LeftNav({
  // list,
  firstText,
  onChange,
}) {
  let list = [];
  const location = useLocation();
  const history = useHistory();

  const [nowIndex, setNowIndex] = useState(0);
  const [listCopy, setListCopy] = useState(list);

  // secLNav 选择左侧的nav
  const secLNav = +getParam('secLNav');
  if (secLNav === 1) {
    list = leftNav1;
  } else if (secLNav == 2) {
    list = leftNav2;
  } else if (secLNav == 3) {
    list = leftNav3;
  } else {
    list = [];
  }
  
  // 设置高亮
  useEffect(() => {
    const listc = _.cloneWith(list);
    listc.map((e, index) => {
      if (e.path || e.link) {
        if (+getParam('activeKey') === +e.key) {
          e.isActive = true;
          setNowIndex(index);
        } else {
          e.isActive = false;
        }
      }
    })

    setListCopy(listc);
  }, [location]);
  

  const navClick = (e) => {
    if (e.path || e.link) {
      history.push(e.path || e.link);
    }

    if (onChange) {
      onChange();
    }
  };

  return (
    <Fragment>
      {
        listCopy && listCopy.length > 0 && (
          <div className="navleft">
            <div className="navleft-now">
              {firstText || listCopy[nowIndex] && (listCopy[nowIndex].text || listCopy[nowIndex].tabName)}
            </div>
            <div className="navleft-list">
              {
                listCopy.map((e, index) => {
                  return (
                    <div key={e.text} onClick={() => navClick(e)} className={`navleft-item ${e.isActive ? 'active' : ''}`}>
                      <div>{e.text || e.tabName}</div>

                      {
                        e.isActive && <RightOutlined />
                      }

                      {
                        e.tip && (
                          <div className="navleft-tip">{e.tip}</div>
                        )
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
        )
      }
    </Fragment>
  );
}