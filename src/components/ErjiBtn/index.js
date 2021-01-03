import React, { Fragment } from 'react';
import { RightOutlined } from '@ant-design/icons';

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function ErjiBtn({
  text, isShowIcon, url
}) {
  return (
    <div className="erji-btn inner-top-l">
      <div>
        {text || '立即报名'}
        {
          isShowIcon && (
            <Fragment>
              &nbsp;
              &nbsp;
              <RightOutlined />
            </Fragment>
          )
        }
      </div>
      
    </div>
  );
}