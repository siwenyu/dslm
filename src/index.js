import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'babel-polyfill';

import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import './assets/css/normallize.css';
import './assets/css/style.less';
import './assets/css/yewu.less';

moment.locale('zh-cn');

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
