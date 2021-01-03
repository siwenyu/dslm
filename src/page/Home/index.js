import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Layout from '../../components/Layout';

import HomeNews from '../../components/HomeNews';
import HomePreach from '../../components/HomePreach';
import HomeFairsTab0 from '../../components/HomeFairsTab0';
import HomeFairsTab1 from '../../components/HomeFairsTab1';
import HomeFairsTab2 from '../../components/HomeFairsTab2';
import CalendarWrap from '../../components/CalendarWrap';
import HomePartners from '../../components/HomePartners';
import Ncss from './components/Ncss';

import {
  getIndexNews,
  getIndexFairs,
  getIndexJobs,
  getIndexNotices,
  getIndexPreaches,
  getIndexAllKindInfo,
} from '../../../api/index';

import {
  postSecNotices,
} from '../../../api/second';


import {
  tabDataIndexFairsConfig,
  tabDataIndexNoticesConfig,
  unitZhaopinTabData,
} from '../../config';

import './index.less';

export default function Home() {
  const history = useHistory();

  const [indexNewsList, setIndexNewsList] = useState([]);

  // 第一个tab
  const [tab0List0, setTab0List0] = useState(null);
  const [tab0List1, setTab0List1] = useState(null);
  const [tab0List2, setTab0List2] = useState(null);

  // 第二个tab
  const [tab1List0, setTab1List0] = useState(null);
  const [tab1List1, setTab1List1] = useState(null);
  const [tab1List2, setTab1List2] = useState(null);
  const [tab1List3, setTab1List3] = useState(null);
  const [tab1List4, setTab1List4] = useState(null);
  const [tab1List5, setTab1List5] = useState(null);
  const [tab1List6, setTab1List6] = useState(null);

  // 第三个tab
  const [tab2List0, setTab2List0] = useState(null);
  const [tab2List1, setTab2List1] = useState(null);
  const [tab2List2, setTab2List2] = useState(null);
  const [tab2List3, setTab2List3] = useState(null);
  const [tab2List4, setTab2List4] = useState(null);
  const [tab2List5, setTab2List5] = useState(null);
  const [tab2List6, setTab2List6] = useState(null);
  const [tab2List7, setTab2List7] = useState(null);
  
  // 获取数据
  useEffect(() => {
    // 新闻
    const newsParams = {
      size: 6
    };
    getIndexNews(newsParams).then((res) => {
      setIndexNewsList(res.data?.infos || []);
    });

    initData();

  }, [history]);
  
  const initData = () => {
    // 宣讲会
    getIndexPreaches({
      size: 6,
      mode: '',
    }).then((res) => {
      if (res.data && res.data.preaches) {
        setTab0List0(res.data.preaches);
      }
    });
    getIndexFairs({
      size: 6,
      mode: '',
    }).then((res) => {
      if (res.data && res.data.fairs) {
        setTab0List1(res.data.fairs);
      }
    });
    getIndexAllKindInfo({
      category: 'JIC015',
      page: 1,
      pageSize: 6,
    }).then((res) => {
      if (res.data && res.data.jobs) {
        setTab0List2(res.data.jobs);
      }
    });

    // 在线招聘
    postSecNotices({
      page: 1,
      pageSize: 6,
    }).then((res) => {
      if (res.data && res.data.notices) {
        setTab1List0(res.data.notices);
      }
    });

    // 单位
    getIndexAllKindInfo({
      category: 'JIC007',
      page: 1,
      pageSize: 6,
    }).then((res) => {
      if (res.data && res.data.jobs) {
        setTab2List0(res.data.jobs);
      }
    });

    setTimeout(() => {
      getIndexAllKindInfo({
        category: 'JIC001',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab1List1(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        page: 1,
        pageSize: 6,
        category: 'JIC002',
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab1List2(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC003',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab1List3(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC004',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab1List4(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC008',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List1(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC009',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List2(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC010',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List3(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC011',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List4(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC012',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List5(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC013',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List6(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC014',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab2List7(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC005',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab1List5(res.data.jobs);
        }
      });
      getIndexAllKindInfo({
        category: 'JIC006',
        page: 1,
        pageSize: 6,
      }).then((res) => {
        if (res.data && res.data.jobs) {
          setTab1List6(res.data.jobs);
        }
      });
    }, 2000);
  }
  
  return (
    <div className="page home">
      <Layout>
        {/* banner */}

        <div className="normal-row">
          {/* 新闻公告 */}
          <HomeNews list={indexNewsList}/>

          <div className="home-rili gap-top-m normal-col">
            <div className="home-title">日历</div>
            <CalendarWrap />
          </div>
        </div>

        <div className="normal-row">
          <div className="home-left">
            {/* 双选会 */}
            <HomeFairsTab0
              lists={[tab0List0, tab0List1, tab0List2]}
              data={tabDataIndexFairsConfig}
            />

            {/* 招聘 */}
            {
              <HomeFairsTab1
                lists={[tab1List0, tab1List1, tab1List2, tab1List3, tab1List4, tab1List5, tab1List6]}
                data={tabDataIndexNoticesConfig}
              />
            }

            {/* 事业单位 */}
            {
              <HomeFairsTab2
                lists={[tab2List0, tab2List1, tab2List2, tab2List3, tab2List4, tab2List5, tab2List6, tab2List7]}
                data={unitZhaopinTabData}
              />
            }
          </div>

          <div className="home-right gap-top-m normal-col">
            <Ncss />
            <HomePartners />
          </div>
        </div>
      </Layout>
    </div>
  );
}