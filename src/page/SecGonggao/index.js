import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import LoadWrap from '../../components/LoadWrap';

import RightTopNav from '../../components/RightTopNav';

import { getParam } from '../../../utils/url';

import { getSecInfos } from '../../../api/second';
import ItemNews from '../../components/ItemNews';

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
    getSecInfos({ page, pageSize, category: getParam('category') || 'C010101' }).then((res) => {
      if (res.data) {
        setList(res.data.infos);
        setTotal(res.data.total);
      }
    });
  }

  const onChange = (index) => {
    setPage(index);
    getData(index);
  };

  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          <div className="news-list">
            {
              list
                ? (
                  list.map((item, indexIndex) => {
                    return <ItemNews pathName="normaldetail" key={item.infoId || item.title} hasBefore={false} hasTime={true} data={item} />
                  })
                )
                : (
                  <LoadWrap />
                )
            }
            
          </div>

          <Pagination defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}
