import React, { useState, Fragment } from 'react';
import './index.less';

const icon = require('../../assets/images/police.png');

export default function Footer({
  isHome
}) {
  return (
    <Fragment>
      {/* {
        !isHome && (
          <div>
            <div className="footer-bar">
              <div className="bar-left">
              </div>
              <div className="bar-right">
              </div>
            </div>
          </div>
        )
      } */}
      <div className={`footer`}>
        <div>
          <span>东北师范大学学生就业指导服务中心</span>
          <span>版权所有</span>
          <span><img alt="" src={icon} /></span>
          <span><a href="https://beian.miit.gov.cn/" target="_blank">吉ICP备05004942</a></span>
          <br />
          <span>可信网站验证 </span>
          <span>安全联盟 </span>
          {/* <span>浏览量：今日{dayNum} / 共计{allNum} </span> */}
          <span>技术支持：卓音网络工作室 </span>
        </div>
      </div>
    </Fragment>
  );
}