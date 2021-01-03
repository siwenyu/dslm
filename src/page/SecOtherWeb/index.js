import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';
import ItemLikeNew from '../../components/ItemLikeNew';

import { getParam } from '../../../utils/url';

import { getSecInfos } from '../../../api/second';
import { 
  getIndexAllKindInfo,
 } from '../../../api/index';

export default function SecGonggao() {

  const [list, setList] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);

  const history = useHistory();

  useEffect(() => {
    getData(page);
  }, [history]);

  const getData = (page) => {
    getIndexAllKindInfo({ page, pageSize, category: getParam('category') || 'C010101' }).then((res) => {
      if (res.data) {
        setList(res.data.jobs);
        setTotal(res.data.total);
      }
    });
  }

  const onChange = (index) => {
    setPage(index);
    getData(index);
  };

  const onNavChange = () => {
    setPage(1);
    getData(1);
  };

  return (
    <Layout>
      <div className="erji">
        <LeftNav
          onChange={onNavChange}
        />
        
        <div className="right">
          <RightTopNav />
          <div className="news-list">
            {
              list && list.map((item, indexIndex) => {
                return <ItemLikeNew pathName="normaldetail" rightNav={+getParam('rightNav') + 1} key={item.fairId} data={item} hasTime />
              })
            }
          </div>

          <Pagination defaultCurrent={1} current={page} onChange={onChange} total={total} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}
