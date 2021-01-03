import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import _ from 'lodash';

import LoadWrap from '../LoadWrap';

import './index.less';

import { getSecInfos } from '../../../api/second';

import HomeMore from '../HomeMore';
import NormalList from '../NormalList';

const { TabPane } = Tabs;

export default function HomeZhaopin({
  tabData,
  showNum,
  hasTime,
  hasBefore,
  pathName,
}) {
  const _tabData = _.cloneWith(tabData);
  useEffect(() => {

    // 招聘须知
    getSecInfos({ page: 1, pageSize: 3, category: 'C030301' }).then((res) => {
      // alert(JSON.stringify(res.data))
      if (res.data && res.data.infos) {
        _tabData[0].list = res.data.infos;
      }
    });

    // 场地介绍
    getSecInfos({ page: 1, pageSize: 3, category: 'C030401' }).then((res) => {
      if (res.data && res.data.infos) {
        _tabData[1].list = res.data.infos;
      }
    });
  }, [tabData]);
  tabData.forEach((e, index) => {
    tabData[index].list = e.list.slice(0, showNum || 8);
  });

  const [moreLink, setMoreLink] = useState(tabData[0].link);

  const callback = (data) => {
    setMoreLink(tabData[data - 1].link);
  };
  
  return (
    <div className="normal-tablist">
      <div className="normal-tablist-more">
        <HomeMore link={moreLink} />
      </div>
      <LoadWrap data={tabData}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {
            tabData.map(e => {
              return (
                <TabPane tab={e.tabName} key={e.key}>
                  <NormalList pathName={pathName} list={e.list} hasTime={false} showNum={showNum} hasBefore={true} />
                </TabPane>
              )
            })
          }
        </Tabs>
      </LoadWrap>
    </div>
  );
}