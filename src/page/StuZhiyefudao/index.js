import React, { useState, Fragment } from 'react';
import { Pagination } from 'antd';

import Layout from '../../components/Layout';
import ItemPreach from '../../components/ItemPreach';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

import { fairsList } from '../constans';

export default function StuZhiyefudao() {
  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          <div className="fairs-list">
            {
              fairsList.map((item, indexIndex) => {
                item.riliType = indexIndex + 1;
                item.riliType = item.riliType > 2 ? 2 : item.riliType;
                item.riliType = item.riliType > 6 ? 3 : item.riliType;
                return <ItemPreach key={item.name} riliType={item.riliType} data={item} />
              })
            }
          </div>

          <Pagination defaultCurrent={1} total={500} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}