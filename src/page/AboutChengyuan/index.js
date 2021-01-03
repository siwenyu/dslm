import React, { useState, Fragment, useEffect } from 'react';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

import { getWorkers } from '../../../api/second';

const chengyuanImg1 = require('../../assets/images/chengyuan-img1.png');

export default function AboutChengyuan() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getWorkers().then(res => {
      setList(res.data?.workers || []);
    })
  }, []);
  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          
          <div className="chengyuan">

            {
              list.map(item => {
                return (
                  <div className="chengyuan-row">
                    {
                      item.map(itemItem => {
                        return (
                          <div className="chengyuan-item">
                            <img src={itemItem.picture?.url || ''} alt={itemItem.name} />
                            <div className="title16 gap-top-m">{itemItem.name}</div>
                            <div className="">{itemItem.post}</div>
                            <div className="title16 gap-top-s">{itemItem.duty}</div>
                            <div className="">{itemItem.telephone}</div>
                            <div className="">{itemItem.email}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
            
          </div>

        </div>
      </div>
    </Layout>
  );
}