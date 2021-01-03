import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

import './index.less';

import SubmitResume from '../SubmitResume';
import { getParam } from '../../../utils/url';

export default function ItemJobWithFair({
  data, type
}) {
  const history = useHistory();

  return (
    <div key={data.fairId} className="fairdetail-item">
      <div className="fairdetail-item-top">
        {
          data.company?.logo && (
            <img src={data.company?.logo?.url || window.defaultLogo} alt="" />
          )
        }
        <div>
          <div className="title18 c-line-clamp1">{data.company?.name}</div>
          {
            data.fairJobs && (
              <div className="job">{data.fairJobs?.length}职位</div>
            )
          }
        </div>
      </div>
      <div className="fairdetail-content">
        {
          data.fairJobs?.length > 0 && (
            data.fairJobs.slice(0, 3).map(item => {
              return (
                <div key={item.job.name} className="fairdetail-job-item">
                  <div>
                    <div className="before" />
                    <div className="title16 c-line-clamp1">{item.job.name}</div>
                  </div>
                  <SubmitResume modalTitle="欢迎扫码报名参加双选会" />
                </div>
              )
            })
          )
        }
      </div>

      <div className="fairdetail-footer">
        <a target="_blank" href={`/companyhomewithfairs?headerNav=11&fairId=${getParam('id')}&companyId=${data.company?.companyId}`}>查看全部岗位 <RightOutlined /></a>
      </div>
    </div>
  );
}