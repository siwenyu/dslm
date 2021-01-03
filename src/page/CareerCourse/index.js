import React, { useState, Fragment } from 'react';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

export default function CareerCourse() {
  return (
    <Layout>
      <div className="erji">
        <LeftNav firstText="职业辅导" />
        
        <div className="right">
          <RightTopNav />
          <div className="careeradvise">
            意见建议
          </div>
        </div>
      </div>
    </Layout>
  );
}