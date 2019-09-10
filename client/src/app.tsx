import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "@app/routes/home";
import Profile from "@app/routes/profile";
import Header from "@app/components/header";

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
          <div class="Container">

            <Router onChange={this.handleRoute}>
              <Route path="/" component={Home} />
              <Route path="/profile/" component={Profile} user="me" />
              <Route path="/profile/:user" component={Profile} />
            </Router>

          </div>
        </div>
      </div>
    );
  }
}
