import React from 'react';

import './index.less';

const mapImg = require('../../assets/images/erji-map.png');

export default function ErjiMap({
  text
}) {
  return (
    <div className="erji-map">
      <div className="home-title gap-bottom-m">杭州新东方</div>
      <img src={mapImg} alt="" />
    </div>
  );
}