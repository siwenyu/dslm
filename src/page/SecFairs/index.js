import React, { useState, useEffect, Fragment } from 'react';
import { Pagination, Empty } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';
import ItemFair from '../../components/ItemFair';

import { getParam } from '../../../utils/url';

import { postSecFairs } from '../../../api/second';

export default function SecFairs() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);

  const history = useHistory();

  useEffect(() => {
    getData(page);
  }, [history]);

  const getData = (page) => {
    postSecFairs({
      page,
      pageSize,
      name: getParam('name'),
      // mode: getParam('mode'),
    }).then((res) => {
      if (res.data) {
        setList(res.data.fairs);
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
        <LeftNav />
        
        <div className="right">
          <RightTopNav />
          <div className="fairs-list">
            {
              list && list.length > 0
                ? (
                  <Fragment>
                    {
                      list.map((item, indexIndex) => {
                        return <ItemFair key={item.fairId} data={item} />
                      })
                    }
                  </Fragment>
                )
                : <Empty />
            }
          </div>
          {
            list && list.length > 0 && (
              <Pagination pageSize={pageSize} defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
            )
          }
        </div>
      </div>
    </Layout>
  );
}
