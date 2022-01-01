import React, { useState, Fragment } from 'react';
import { Calendar } from 'antd';
import Slider from "react-slick";
import { RightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

import Layout from '../../components/Layout';
import ItemPreach from '../../components/PreachItem';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

import { fairsList } from '../constans';

export default function NewList() {
  return (
    <Layout>
      <div className="erji">
        <LeftNav />
        
        <div className="right">
          <RightTopNav />
          <div className="fairs-list">
            {
              fairsList.map((item, indexIndex) => {
                item.riliType = indexIndex + 1;
                item.riliType = item.riliType > 2 ? 2 : item.riliType;
                item.riliType = item.riliType > 6 ? 3 : item.riliType;
                return <NormalList key={item.infoId || item.title} hasBefore={false} hasTime={true} data={item} />
              })
            }
          </div>

          <Pagination defaultCurrent={1} total={500} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}