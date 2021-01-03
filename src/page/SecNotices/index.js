import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import ErjiList from '../../components/ErjiList';


import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';


export default function SecNotices() {

  const history = useHistory();

  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          <ErjiList isShowList={true} type="notices" />
        </div>
        
      </div>
    </Layout>
  );
}