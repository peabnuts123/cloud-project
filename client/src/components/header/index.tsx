import { Component, h } from "preact";
import { Link } from "preact-router/match";

export default class Header extends Component {
  public render() {
    return (
      <header class="Header">
        {/* Sandwich icon */}
        <div class="Header-menuIcon">
          <span class="fas fa-bars" />
        </div>

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
      </header>
    );
  }
}
