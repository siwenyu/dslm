import React, { useState, useEffect } from 'react';

import LoadWrap from '../LoadWrap';

import './index.less';

import { aqList } from '../../page/constans';

import ItemAq from '../ItemAq';

import { getSecInfos } from '../../../api/second';

const icon = require('../../assets/images/normal-qa-icon.png');

export default function HomeAq({
  // newsList
}) {
  const [list, setList] = useState([]);
  useEffect(() => {
    getSecInfos({ page: 1, pageSize: 8, category: 'C020201' }).then((res) => {
      if (res.data) {
        setList(res.data.infos);
        // setTotal(res.data.total);
      }
    });
  }, []);
  return (
    <div className="home-aq">
      <div className="aq-title">
        <div className="home-title">
          <img alt="" className="aq-title-icon" src={icon} />
          常见问题
        </div>
      </div>
      <LoadWrap data={aqList}>
        <div >
          {
            list.map((e, index) => {
              return <ItemAq data={e} />
            })
          }
        </div>
      </LoadWrap>
    </div>
  );
}