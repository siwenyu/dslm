import React, { useState, Fragment, useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import {RightOutlined} from '@ant-design/icons';
import moment from 'moment';
import _ from 'lodash';

import './index.less';

import { getIndexRili } from '../../../api/index';
export default function CalendarWrap({
  // text, isShowIcon, url
}) {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    gatData(moment().format('YYYY-MM'));
  }, []);

  const gatData = (month) => {
    getIndexRili({ month }).then(res => {
      res.data && res.data.calendar && setDataList(res.data.calendar);
    });
  };

  const getListData = (value) => {
    return dataList[value.format('YYYY-MM-DD')] || [];
  }
  
  const dateCellRender = (value) => {
    const listDataOrigin = getListData(value);
    let listData = [];
    if (listDataOrigin.PREACH) {
      listData = _.cloneWith(listDataOrigin.PREACH).splice(0, 5);
    }
    
    return (
      <Fragment>
        <div
          className={`time ${listData && listData.length > 0 ? 'selected' : ''} ${moment().format('YYYY-MM-DD') === moment(value).format('YYYY-MM-DD') ? 'selected-bg' : ''}`}
        >
          <div className="time-text">{moment(value).format('D') }</div>
          <ul className="events">
            {
              listData && listData.length > 0 && (
                <div className="item-bg">
                  {listDataOrigin.PREACH && listDataOrigin.PREACH.length > 0 && listDataOrigin.PREACH.length}
                  <div className="item-content">
                    {
                      listData.map(e => {
                        return (
                          <div
                            key={e.preachId}
                            onClick={() => window.open(`detailpreach?id=${e.preachId}&headerNav=12&rightNav=4`)}
                            className="list-item c-line-clamp1"
                          >
                            <div className="before" />
                            <div className="time">{e.start} ~ {e.until}</div>
                            <div className="title16 c-line-clamp1">{e.name}</div>
                          </div>
                        )
                      })
                    }
                    {
                      listDataOrigin.PREACH && listDataOrigin.PREACH.length > 5 && (
                        <div
                          className="more"
                          onClick={() => window.open(`/xuanjianghui?secLNav=10&headerNav=12&date=${value.format('YYYY-MM-DD')}&rightNav=3`)}
                        >
                          查看全部{listDataOrigin.PREACH.length}条 &nbsp;&nbsp;<RightOutlined />
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            }
          </ul>
        </div>
        
      </Fragment>
    );
  }

  const onChange = (data) => {
    gatData(moment(data).format('YYYY-MM'));
  };

  return (
    <Calendar
      className="normal-card"
      locale={{lang: { locale: '' }}}
      dateFullCellRender={dateCellRender}
      onPanelChange={onChange}
    />
  )
}