import React, { useState } from 'react';

import LoadWrap from '..//LoadWrap';

import './index.less';

import { toolsList } from '../../page/constans';

const icon = require('../../assets/images/jiuye-tool-iocn.png');

export default function HomeTools({
  // newsList
}) {
  return (
    <div className="home-tools">
      <div className="tools-title">
        <div className="home-title">
          <img alt="" className="tool-title-icon" src={icon} width="20px" height="20px" />
          求职工具
        </div>
      </div>
      <LoadWrap data={toolsList}>
        <div >
          {
            toolsList.map((e, index) => {
              return (
                <div key={e.name} className="tools-item">
                  <img alt="" src={e.logo} />
                  <span>{e.name}</span>
                </div>
              )
            })
          }
        </div>
      </LoadWrap>
    </div>
  );
}