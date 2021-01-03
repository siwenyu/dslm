import React, { useState, Fragment } from 'react';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

const jianliCode = require('../../assets/images/jianliCode.jpeg');

export default function StuWeijiuye() {
  return (
    <Layout>
      <div className="erji weijiuye">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          <div>
            <img src={jianliCode} />
          </div>
        </div>
      </div>
    </Layout>
  );
}