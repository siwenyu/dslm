import React from 'react';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './page/Home';

import { routeList } from './router';

const renderRoute = () => {
  return routeList.map(e => {
    return <Route key={e.path} exact path={e.path} component={e.pageComponent} />
  });
}

// 设置全局属性
const defaultLogo = require('./assets/images/defaultlogo.png');
window.defaultLogo = defaultLogo;

function App() {
  return (
    <Router>
      <Switch>
        {renderRoute()}
        <Redirect to="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
