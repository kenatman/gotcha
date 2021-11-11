import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

import Header from "./Header.jsx";

class Road extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        {/* Switch의 역할 : 한번에 하나의 Route만 렌더링하게 해줌. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv" component={TV} />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/tv/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
    );
  }
}

export default Road;
