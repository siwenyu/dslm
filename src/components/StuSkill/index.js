import React, { useState } from 'react';
import { Tabs } from 'antd';

import LoadWrap from '../LoadWrap';

import './index.less';

import HomeMore from '../HomeMore';
import SkillItem from '../SkillItem';

import { skillTabData } from '../../page/constans';

const { TabPane } = Tabs;

export default function StuSkill({
  // tabData,
  showNum,
}) {

  skillTabData.forEach((e, index) => {
    skillTabData[index].list = e.list.slice(0, showNum || 6);
  });
  const [moreLink, setMoreLink] = useState(skillTabData[0]?.link);

  const callback = (data) => {
    setMoreLink(skillTabData[data - 1]?.link);
  };
  
  return (
    <div className="stu-skill">
      <div className="skill-more">
        <HomeMore link={moreLink} />
      </div>
      <LoadWrap data={skillTabData}>
        <Tabs defaultActiveKey="2" onChange={callback}>
          {
            skillTabData.map(e => {
              return (
                <TabPane tab={e.tabName} key={e.tabName}>
                  {
                    e.list.map((item) => {
                      return <SkillItem key={item.title} data={item} />
                    })
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