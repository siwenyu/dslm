import React, { useState, Fragment } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import './index.less';

import RiliItem from '../RiliItem';

const hot = require('../../assets/images/news-top.png');

export default function ItemFair({
  data, rightNavType
}) {
  const history = useHistory();
  const itemClick = (e) => {
    window.open(`/detailfair?${rightNavType ? `&secRNav=${rightNavType}`: ''}&headerNav=11&id=${data.fairId}&rightNav=6`);
  }
  return (
    <div key={data.name} className="preach-item hover-item" onClick={itemClick}>
      <div>
        <div className="rili">
          <RiliItem time={`${data.start}`} type={data.open ? 1 : 2} />
        </div>
        <div className="preach-item-title">
          <div className="c-line-clamp1">
            <div className="c-line-clamp1 title16">{`${data.name}`}</div>
            {
              data.isNew === 1 && (
                <div className="item-new">
                  new
                </div>
              )
            }
          </div>
          
          <div className="preach-item-tag c-line-clamp1">
            {
              data.shown
                ? (
                  <Fragment>
                    <div>
                      {
                        data.companyCount > 0 && (
                          <span>{ data.companyCount }单位&nbsp;&nbsp;&nbsp;</span>
                        )
                      }
                      {
                        data.headCount > 0 && (
                          <span className="job">{ data.headCount } 岗位&nbsp;&nbsp;&nbsp;</span>
                        )
                      }
                    </div>
                    {
                      data.read && (
                        <div>{data.read}</div>
                      )
                    }
                  </Fragment>
                )
                : (
                  <div>
                    优质单位报名中
                  </div>
                )
            }
          </div>
        </div>
        {/* <div className="sign">
          {
            data.status === 'OVER'
              ? (
                <div className="sign-btn isold">已过期 &nbsp;<RightOutlined /></div>
              )
              : (
                <div className="sign-btn">我要报名 &nbsp;<RightOutlined /></div>
              )
          }
          
        </div> */}
      </div>
    </div>
  );
}