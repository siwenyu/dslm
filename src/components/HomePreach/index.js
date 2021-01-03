import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';

import LoadWrap from '../LoadWrap';

import './index.less';

import HomeMore from '../HomeMore';
import ItemPreach from '../ItemPreach';

import { tabData } from '../../page/constans';

const { TabPane } = Tabs;

export default function HomePreach({
  data,
  list0,
  list1,
  showNum
}) {
  const tabDataRender = data || tabData;
  tabDataRender[0].list = list0;
  tabDataRender[1].list = list1;
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
    <div className="home-preach">
      <div className="preach-more">
        <HomeMore link={moreLink} />
      </div>
      <LoadWrap data={tabDataRender}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {
            tabDataRender.map(e => {
              return (
                <TabPane tab={e.tabName} key={e.key}>
                  <LoadWrap data={e.list}>
                    {
                      e.list && e.list.map((item, indexIndex) => {
                        item.riliType = indexIndex + 1;
                        item.riliType = item.riliType > 2 ? 3 : item.riliType;
                        return <ItemPreach key={item.preachId} riliType={item.riliType} data={item} />
                      })
                    }
                  </LoadWrap>
                </TabPane>
              )
            })
          }
        </Tabs>
      </LoadWrap>
    </div>
  );
}