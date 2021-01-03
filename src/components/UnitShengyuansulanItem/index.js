import React, { useState } from 'react';

import LoadWrap from '../LoadWrap';
import NewsItem from '../ItemNews';

import './index.less';

import { newsList } from '../../page/constans';
import HomeMore from '../HomeMore';

export default function UnitShengyuansulanItem({
  data
}) {
  return (
    <div onClick={() => window.open(`/normaldetail?id=${data.infoId}&secLNav=10&headerNav=11`)} className="shengyuansulan-item border-bottom normal-col">
      <div className="normal-item-title gap-right-s c-line-clamp1">{data.title}</div>
      <div className="">
        <span>{data.publishDate}</span>
        <span>{data.subtitle}</span>
      </div>
    </div>
  );
}