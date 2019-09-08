import { Component, h } from "preact";
import { Link } from "preact-router/match";

export default class Header extends Component {
  public render() {
    return (
      <header class="Header">
        <h1>Preact App</h1>
        <nav>
          <Link activeClassName="is-active" href="/">Home</Link>
          <Link activeClassName="is-active" href="/profile">Me</Link>
          <Link activeClassName="is-active" href="/profile/john">John</Link>
        </nav>
      </header>
    );
  }
}
