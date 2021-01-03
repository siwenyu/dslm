import React, { useState } from 'react';
import { message } from 'antd';

import LoadWrap from '../LoadWrap';

import './index.less';

import { passData } from '../../page/constans';

const img1 = require('../../assets/images/stu-pass-icon.png');
const img2 = require('../../assets/images/stu-pass-icon-hover.png');

export default function HomePass({
  // tabData
}) {
  const handleToolClick = (e) => {
    if (e.link) {
      window.open(e.link);
    } else {
      message.info('功能建设中，敬请期待~~~');
    }
  };
  
  return (
    <div className="home-pass">
      <div className="pass-title home-title">学生快速通道</div>
      <LoadWrap data={passData}>
        <div className="pass-line2">
          <div onClick={handleToolClick} className="pass-zhinan pass-item">
            <div className="pass-zhinan-title">
              <div>就业指南</div>
              <div>
                <img className="img" alt="" src={img1} />
                <img className="hover-img" alt="" src={img2} />
                <span className="pass-zhinan-subtitle">就业指南电子版</span>
              </div>
            </div>
            <div className="pass-zhinan-btn">
              下载
            </div>
          </div>
          {
            passData.map((item, indexIndex) => {
              return (
                <div onClick={() => handleToolClick(item)} key={item.title} className="pass-item">
                  <div className="pass-item-title">
                    <div>{item.title}</div>
                    <div>
                      <img className="img" alt="" src={item.icon} />
                      <img  className="hover-img" alt="" src={item.iconHover} />
                      <span className="pass-item-subtitle">{item.subTitle}</span>
                    </div>
                  </div>
                  <div style={{backgroundImage: `url(${item.bgIcon})`}} className="pass-item-bg">
                  </div>
                </div>
              )
            })
          }
        </div>
      </LoadWrap>
    </div>
  );
}