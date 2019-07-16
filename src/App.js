import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>个人中心</li>
            <li>了解更多</li>
            <li>文档</li>
            <li><NavLink>首页</NavLink></li>
          </ul>
        </div>)
        <Switch>
        <Redirect from="/" to="/"/>
        <Route/>
        <Route/>
        <Route/>
        <Route path="/" component={App}/>
        </Switch>
      </Router>
  );
}

export default App;
