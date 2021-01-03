import React, { useState, useEffect } from 'react';

import HomeMore from '../HomeMore';
import LoadWrap from '../LoadWrap';

import './index.less';

import { getIndexPartners } from '../../../api/index';

const icon1 = require('../../assets/images/footer-icon1.png');
const icon2 = require('../../assets/images/footer-icon2.png');
const icon3 = require('../../assets/images/footer-icon3.png');
const icon4 = require('../../assets/images/footer-icon4.png');
const icon5 = require('../../assets/images/footer-icon5.png');
const icon6 = require('../../assets/images/footer-icon6.png');
const icon7 = require('../../assets/images/footer-icon7.png');
const icon8 = require('../../assets/images/footer-icon8.png');

export default function HomePartners({
  showHuoban, showInfo, partnersSize,
}) {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    getIndexPartners({ size: partnersSize }).then(res => {
      setPartners(res?.data?.partners || []);
    })
  }, [showHuoban]);

  return (
    <div className="home-hezuohuoban-con gap-top-m">
      <div className="title-line">
        <div className="home-title">合作伙伴</div>
      </div>
      <div className="hezuohuoban-list">
        <LoadWrap data={partners}>
          {
            partners.map((item, index) => {
              return (
                <div onClick={() => {window.open(item.url)}} key={item.picture.url} className="hezuohuoban-item-wrap">
                  <div style={{backgroundImage: `url(${item.picture.url})`}} className="hezuohuoban-item">
                  </div>
                </div>
              )
            })
          }
        </LoadWrap>
      </div>
    </div>
  );
}