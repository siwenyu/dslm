import React from 'react';

import './index.less';

const mapImg = require('../../assets/images/erji-map.png');

export default function ErjiMap({
  list,
  title
}) {
  return (
    <div className="erji-nearly-sxh">
      <div className="home-title gap-bottom-m">{title}</div>
      {
        list.map((e) => {
          return <img key={e.img} src={e.img} alt="" />
        })
      }
    </div>
  );
}