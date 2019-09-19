import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Header from "@app/components/header";

import Home from "@app/routes/home";
import Profile from "@app/routes/profile";
import Post from "@app/routes/post";
import Settings from '@app/routes/settings';

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

export default class App extends Component {
  public currentUrl?: string;
  public handleRoute = (e: RouterOnChangeArgs) => {
    this.currentUrl = e.url;
  }

  public render() {
    return (
      <div id="app">
        <Header />
        <div className="SiteWrapper">

          <Router onChange={this.handleRoute}>
            <Route path="/" component={Home} />
            <Route path="/post/:post_id" component={Post} />
            <Route path="/profile/" component={Profile} />
            <Route path="/settings/" component={Settings} />
          </Router>

        </div>
      </div>
    );
  }
}
