import React, { useState } from 'react';

import LoadWrap from '../LoadWrap';
import NewsItem from '../ItemNews';

import './index.less';

import HomeMore from '../HomeMore';

export default function UnitNews({
  list,
}) {
  const newsClick = (e) => {
    window.open(`/detailgonggao?id=${e.infoId}&secRNav=20`);
  };
  const newsListRender = list.slice(0, 3);
  return (
    <div className="unit-news">
      <div className="unit-title">
        <div className="home-title">
          就业新闻
        </div>
        <HomeMore link="/xinwen?headerNav=12&secLNav=13&category=C010101" />
      </div>
      <LoadWrap data={newsListRender}>
        {
          newsListRender.length > 0 && (
            <div className="normal-col">
              <div onClick={() => newsClick(newsListRender[0])} className="unit-first">
                <img alt="" src={newsListRender[0].picture.url} />
                <div className="text c-line-clamp1">
                  {newsListRender[0].title}
                </div>
              </div>
              <div className="new-list-normal">
                {
                  newsListRender.map((e, index) => {
                    if (index > 0) {
                      return <NewsItem pathName="detailgonggao" data={e} />
                    }
                  })
                }
              </div>
            </div>
          )
        }
      </LoadWrap>
    </div>
  );
}