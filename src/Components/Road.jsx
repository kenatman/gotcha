import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header.jsx";

class Road extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/* Switch의 역할 : 한번에 하나의 Route만 렌더링하게 해줌. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tv" component={TV} />
          {/* render 속성은 inline function을 넘길 때 성능향상. */}
          <Route path="/tv/popular" render={() => <h2>Popular</h2>} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Road;
