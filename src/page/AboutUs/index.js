import React, { useState, Fragment } from 'react';

import { Tabs } from 'antd';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';


const rongyuImg1 = require('../../assets/images/aboutus-img1.png');
const rongyuImg2 = require('../../assets/images/aboutus-img2.png');
const shezhiImg = require('../../assets/images/about-shezhi.png');
const logoImg = require('../../assets/images/aboutus-logo.png');
const mapImg1 = require('../../assets/images/aboutus-map1.png');
const mapImg2 = require('../../assets/images/jingyue-map.png');

const { TabPane } = Tabs;

const shezhiList = [
  {
    title: '企划发展室',
    text: '就业市场的宣传、开发、培育；用人单位的信息管理、关系保持、日常接待；毕业生就业供需见面会策划、筹备、 邀请、组织；“东师信使”选聘与管理。'
  },
  {
    title: '信息服务室',
    text: '东北高师就业联盟网开发、建设和维护；就业信息平台开发与维护；毕业生信息的采集、处理、发布；毕业生就业过程的调研与监测；无形市场的开发建设。'
  },
  {
    title: '咨询指导室',
    text: '《就业创业指导》、《职业生涯规划》课程教学管理与建设；职业咨询指导服务；就业能力提升培训；就业援助与帮扶。'
  },
  {
    title: '综合办公室',
    text: '毕业生资格审查；办理就业协议书的签约手续；毕业生派遣、改派；制定毕业生就业计划；就业形象大使选拔、考核、管理；中心日常工作行政管理、保障与支持。'
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function AboutUs() {
  return (
    <Layout>
      <div className="erji">
        <LeftNav />
        
        <div className="right">
          <RightTopNav />
          
          <div className="aboutus">
            <div className="title24 gap-bottom-m">东北师范大学学生就业指导服务中心</div>

            <div>
            东北师范大学学生就业指导服务中心成立于2003年，是全面负责学校本科生和研究生就业指导与服务工作的专门机构，正处级建制，下设企划发展室、信息服务室、咨询指导室、综合办公室四个科室。2004年和2012年学校两次被国务院评为“全国就业先进工作单位”，是两次国务院表彰均榜上有名的2所高校之一。
            </div>

            <div className="title20 gap-bottom-m gap-top-m">
              理念：学生为本、市场为准、服务为训
              <br />
              愿景：让学生幸福就业，让单位满意而归
            </div>


            <div className="img-list">
              <div className="img-item">
                <img className="gap-bottom-s" src={rongyuImg1} alt="" />
              </div>

              <div className="img-item">
                <img className="gap-bottom-s" src={rongyuImg2} alt="" />
              </div>
            </div>

            <div className="title18 gap-bottom-s">部门设置</div>

            <div className="shezhi">
              <div className="shezhi-img">
                <img src={shezhiImg} alt="" />
              </div>

              <div className="shezhi-text">
                {
                  shezhiList.map(e => {
                    return <div className="gap-top-m shezhi-item">
                      <div className="title18 gap-bottom-m">{e.title}</div>
                      <div>{e.text}</div>
                    </div>
                  })
                }
              </div>
            </div>


            <div className="erji-normal-title gap-top-l">中心标识</div>

            <div className="logo gap-bottom-l gap-top-l">
              <img src={logoImg} alt="" />
            </div>


            <div className="title18 gap-bottom-s">标识释义</div>
            
            <div>
            以就业首字母JY为设计元素，渐变蓝色为主色调，象征着智慧、知识、理想、远见，辅以黄色帆叶，承载着中心培养人才对社会的服务意识。
            <br />
            <br />
            外形仿似航帆，寓意师大学子在学生就业指导服务中心的引领下，踏上梦想的征程，同时也展示着中心大步向前的昂扬姿态，在人才市场激烈竞争中不畏艰辛、引领潮头、奋勇向前的积极姿态。
            </div>

            
          </div>

          <div className="map">
              <Tabs defaultActiveKey="1">
                <TabPane tab="本部校区" key="1">
                  <div className="map-item inner-top-m">
                    <img src={mapImg1} alt="" />
                    <div className="map-text title18">
                      <span>长春市南关区人民大街5268号 东北师范大学学生就业指导服务中心</span>

                      <span>
                        公交路线：
                        <br />
                        6路、66路、306路自由大路站；
                        <br />
                        25路、80路、227路、238路东北师范大学站
                      </span>

                      <span>
                        地铁路线:
                        <br />
                        地铁1号线东北师大站
                      </span>

                    </div>
                  </div>
                </TabPane>
                <TabPane tab="净月校区" key="2">
                  <div className="map-item inner-top-m">
                    <img src={mapImg2} alt="" />
                    <div className="map-text title18">
                      <span>长春市净月开发区净月大街2555号 东北师范大学净月学生活动中心二楼</span>

                      <span>
                        公交路线：
                        <br />
                        102、120路、160路东北师大净月站
                      </span>

                      <span>
                      轻轨线路：
                        <br />
                        轻轨3号线东北师大站
                      </span>

                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>

        </div>
      </div>
    </Layout>
  );
}