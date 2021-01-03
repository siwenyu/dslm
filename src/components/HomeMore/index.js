import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import './index.less';

const more = require('../../assets/images/more-icon.png');

export default function HomeMore({
  link
}) {
  const history = useHistory();
  const openLink = () => {
    history.push(link);
  }
  return (
    <div className="home-more" onClick={openLink}>
      更多
      <img alt="" src={more} />
    </div>
  );
}