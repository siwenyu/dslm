import React, { useState, Fragment } from 'react';
import { Modal } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import './index.less';

const jianliCode = require('../../assets/images/jianliCode.jpeg');

export default function SubmitResume({
  text, isShowIcon, modalTitle, clickHandle
}) {
  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    if (clickHandle) {
      clickHandle();
    } else {
      setIsShow(true);
    }
  };

  const handleOk = e => {
    setIsShow(false);
  };

  const handleCancel = e => {
    setIsShow(false);
  };
  return (
    <Fragment>
      <div className="btn" onClick={showModal}>
        {text || '投简历'}
        {
          (isShowIcon || false) && (
            <Fragment>
              &nbsp;
              &nbsp;
              <RightOutlined />
            </Fragment>
          )
        }
      </div>
      <Modal
          title={modalTitle || "欢迎扫码投简历"}
          visible={isShow}
          footer={null}
          className="qrcode-modal"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <img src={jianliCode} />
        </Modal>
    </Fragment>
  );
}