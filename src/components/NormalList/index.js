import React, { useState } from 'react';

import LoadWrap from '../LoadWrap';
import NewsItem from '../ItemNews';

import './index.less';

import { newsList } from '../../page/constans';

export default function NormalList({
  list,
  hasBefore,
  hasTime,
  showNum,
  beforeType,
  pathName,
}) {
  const renderList = list || newsList;
  const newsListRender = renderList.slice(0, showNum || 3);
  return (
    <div className="normal-list">
      <LoadWrap data={renderList}>
          <div className="normal-list-item">
            {
              newsListRender.map((e, index) => {
                return <NewsItem hasBefore={hasBefore} beforeType={beforeType} pathName={pathName} hasTime={hasTime} data={e} />
              })
            }
          </div>
      </LoadWrap>
    </div>
  );
}