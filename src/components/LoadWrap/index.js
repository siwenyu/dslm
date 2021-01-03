import React, { useState, Fragment } from 'react';

import './index.less';

const loadingImg = require('../../assets/images/loading.gif');

export default function Layout({
  children, data
}) {
  return (
    <Fragment>
      {
        data && data.length > 0
          ? children
          : <div className="loading">
            <img alt="" src={loadingImg} />
          </div>
      }
    </Fragment>
  );
}