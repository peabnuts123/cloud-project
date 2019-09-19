import { Component, h } from "preact";
import { Link } from "preact-router/match";

import Icon, { IconType } from "@app/components/icon";
import Profile from "@app/components/header/profile";

export default class Header extends Component {
  public render() {
    return (
      <header class="Header">
        <div className="Header-container">

          {/* Sandwich icon */}
          <div class="Header-menuIcon">
            <Icon type={IconType.Menu} />
          </div>

          <div class="Header-navContainer">
            {/* Brand title */}
            <div class="Header-brandContainer">
              <Link activeClassName="is-active" href="/">
                <h1 class="Header-brand">Ego</h1>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav class="Header-desktopNav">
              <Link class="Header-desktopLink" activeClassName="is-active" href="/about">About</Link>
              <Link class="Header-desktopLink" activeClassName="is-active" href="/search">Search</Link>
              <Link class="Header-desktopLink" activeClassName="is-active" href="/profile">Profile (Debug)</Link>
            </nav>
          </div>

          <div class="Header-profileContainer">
            {/* User profile */}
            <Profile />
          </div>

        </div>
      </header>
    );
  }
}
