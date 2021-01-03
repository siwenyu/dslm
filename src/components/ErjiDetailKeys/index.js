import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import './index.less';

const listDefault = [
  {
    key: '职位要求1',
    value: '本科及以上'
  },
  {
    key: '职位要求2',
    value: '本科及以上'
  },
  {
    key: '职位要求3',
    value: '本科及以上'
  }
];

const hot = require('../../assets/images/news-top.png');

export default function ErjiDetailKeys({
  list,
  type
}) {
  const listRender = list || listDefault;
  const history = useHistory();

  const openLink = (item) => {
    history.push(item.link);
  };

  return (
    <div className={`erjidetail-keys erjidetail-keys-${type}`}>
      {
        listRender.map((e) => {
          return (
            <div key={e.key} className="erji-list">
              <div className="erji-list-keys">{e.key}</div>：
              <div className="">{e.value}</div>
              {
                e.linkText && (
                  <span>&nbsp;&nbsp;<a href={e.link}>{e.linkText}</a></span>
                )
              }
            </div>
          )
        })
      }
    </div>
  );
}