import React, { useState, useEffect, Fragment } from 'react';
import Slider from "react-slick";
import { Carousel } from 'antd';
import { useHistory } from 'react-router-dom';

import LoadWrap from '../../../../components/LoadWrap';

import './index.less';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import bgImg from '../../assets/images/banner-bottom-bg.png';
// import bgImg1 from '../../assets/images/class-banner.png';

// import { bannerList } from '../../../constans';
import { getIndexRollings } from '../../../../../api/index';

export default function HomeBanner({
  // newsList
}) {
  const history = useHistory();

  const [bannerList, setBannerList] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const clickhandle = (e) => {
    window.open(e.url);
  }
  // 获取数据
  useEffect(() => {
    getIndexRollings().then((res) => {
      setBannerList(res.data?.rollings || []);
    });
  }, [history]);

  return (
    <div className="home-banner">
      <LoadWrap data={bannerList}>
        <div>
          <Slider {...settings}>
            {
              bannerList.map((e, index) => {
                return (
                  <Fragment>
                    <div key={e.url} style={{ backgroundImage: `url(${e.picture?.url})` }} onClick={() => clickhandle(e)}>
                      <div style={{ backgroundImage: `url(${e.picture?.url})` }} className="banner-item"></div>
                      <div className="bg-img">
                        {/* <img src={bgImg} alt="" /> */}
                      </div>
                    </div>
                  </Fragment>
                );
              })
            }
          </Slider>
        </div>
      </LoadWrap>
    </div>
  );
}