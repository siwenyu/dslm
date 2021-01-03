import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';

import HomeBanner from '../../page/Home/components/HomeBanner';

import { Pagination, BackTop } from 'antd';

import './index.less';

const style = {
  height: 50,
  width: 40,
  lineHeight: '24px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

export default function Layout({
  children
}) {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const [isUnit, setIsUnit] = useState(false);

  useEffect(() => {
    const regHome = new RegExp('home',"g");
    if (regHome.test(location.pathname)) {
      setIsHome(true);
    }

    const regUnit = new RegExp('unit',"g");
    if (regUnit.test(location.pathname)) {
      setIsUnit(true);
    }

    // 回到顶部
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);
  return (
    <div className="page">
      <div className="layout">
        <Header />
        {
          isHome && <HomeBanner  />
        }
        <div className="page-content">
          {children}
        </div>
        <Footer isHome={isHome}/>

        <BackTop duration={100}>
          <div style={style}>回到顶部</div>
        </BackTop>
      </div>
    </div>
  );
}