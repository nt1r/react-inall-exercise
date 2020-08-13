import React, {Component} from 'react';
import '../styles/app.less';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className={'nav'}>
            <NavLink exact to={'/'} className={'nav_link'} activeClassName={'link_selected'}>HOME</NavLink>
            <NavLink exact to={'/calculator'} className={'nav_link'} activeClassName={'link_selected'}>在线计算器</NavLink>
            <NavLink exact to={'/timer'} className={'nav_link'} activeClassName={'link_selected'}>在线倒计时器</NavLink>
          </nav>

          <Route exact path='/' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/timer' component={Timer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
