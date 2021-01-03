import React, { useState, useEffect } from 'react';
import { Tabs, Empty } from 'antd';

import LoadWrap from '../LoadWrap';

import './index.less';

import HomeMore from '../HomeMore';
import ItemPreach from '../ItemPreach';
import ItemLikeNew from '../ItemLikeNew';

import { tabData } from '../../page/constans';
import ItemFair from '../ItemFair';

const { TabPane } = Tabs;

export default function HomeFairs({
  data,
  lists,
  showNum
}) {
  const tabDataRender = data || tabData;
  tabDataRender.forEach((e, i) => {
    tabDataRender[i].list = lists[i];
  });
  const [moreLink, setMoreLink] = useState(tabDataRender[0].link);
  useEffect(() => {
    tabDataRender.forEach((e, index) => {
      tabDataRender[index].list = e.list && e.list.slice(0, showNum || 6);
    });
  }, [data]);

  const callback = (index) => {
    setMoreLink(tabDataRender[index - 1].link);
  };
  
  return (
    <div className="home-fairs">
      <div className="fairs-more">
        <HomeMore link={moreLink} />
      </div>
      <LoadWrap data={tabDataRender}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {
            tabDataRender.map(e => {
              return (
                <TabPane tab={e.tabName} key={e.key}>
                  {
                    e.list && e.list.length > 0
                    ? e.list.map((item, indexIndex) => {
                      item.riliType = indexIndex + 1;
                      item.riliType = item.riliType > 2 ? 3 : item.riliType;
                      if (e.key === 3) {
                        return <ItemLikeNew rightNav={e.detailRightNav} pathName={e.pathName} riliType={item.riliType} key={item.preachId} hasTime={true} data={item} />
                      } else if (e.key === 2) {
                        return <ItemFair riliType={item.riliType} key={item.preachId} hasTime={true} data={item} />
                      } else {
                        return <ItemPreach riliType={item.riliType} key={item.preachId} hasTime={true} data={item} />
                      }
                    })
                    : (
                      <LoadWrap />
                    )
                  }
                </TabPane>
              )
            })
          }
        </Tabs>
      </LoadWrap>
    </div>
  );
}