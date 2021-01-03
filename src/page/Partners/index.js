import React, { useState, Fragment } from 'react';

import Layout from '../../components/Layout';
import HomePartners from '../../components/HomePartners';

import './index.less';

export default function Partners() {

  return (
    <Layout>
      <div className="erji hezuo">
        <div className="right">
          <div className="title30 gap-top-l">合作伙伴</div>
          <HomePartners partnersSize={1000} showHuoban={true} />
        </div>
      </div>
    </Layout>
  );
}