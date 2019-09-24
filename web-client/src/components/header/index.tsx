import { Component, h } from "preact";

import Icon, { IconType } from "@app/components/icon";
import Profile from "@app/components/header/profile";
import { bind } from "decko";
import renderIf from "@app/utilities/render-if";
import { route, Link } from "preact-router";

const NO_SCROLL_CLASS = 'no-scroll';

interface Props { }
interface State {
  mobileMenuIsOpen: boolean;
}
export default class Header extends Component<Props, State> {
  public state: State = {
    mobileMenuIsOpen: false,
  };

  public get bodyElement(): HTMLBodyElement {
    return document.querySelector('body') as HTMLBodyElement;
  }

  @bind
  public onMenuOpenKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        this.openMobileNav();
        event.preventDefault();
        event.stopPropagation();
        break;
    }
  }

  @bind
  public onMenuCloseKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        this.closeMobileNav();
        event.preventDefault();
        event.stopPropagation();
        break;
    }
  }

  @bind
  public openMobileNav() {
    this.setState({
      mobileMenuIsOpen: true,
    });

    this.bodyElement.classList.add(NO_SCROLL_CLASS);
  }

  @bind
  public closeMobileNav() {
    this.setState({
      mobileMenuIsOpen: false,
    });

    this.bodyElement.classList.remove(NO_SCROLL_CLASS);
  }

  @bind
  public handleNavClick(event: Event) {
    const href = (event.target as HTMLElement).getAttribute('href');
    if (href !== null) {
      this.closeMobileNav();
    }
  }

  public render() {
    return (
      <header class="Header">
        <div className="Header-container">

          {/* Sandwich icon */}
          <div class="Header-menuIcon" aria-role="button" onClick={this.openMobileNav} onKeyDown={this.onMenuOpenKeyDown} tabIndex={0}>
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

        {renderIf(this.state.mobileMenuIsOpen, (
          <div>
            <nav class="Header-mobileNav">
              <div class="Header-mobileNav-topGutter">
                <div class="Header-mobileNav-closeIcon" onClick={this.closeMobileNav} onKeyDown={this.onMenuCloseKeyDown} tabIndex={0}>
                  <Icon type={IconType.X} />
                </div>
              </div>
              <div className="Header-mobileNav-scrollable">
                <ul class="Header-mobileNav-list">
                  <li class="Header-mobileNav-listItem"><Link onClick={this.handleNavClick} href="/" activeClassName="is-active">Home</Link></li>
                  <li class="Header-mobileNav-listItem"><Link onClick={this.handleNavClick} href="/about" activeClassName="is-active">About</Link></li>
                  <li class="Header-mobileNav-listItem"><Link onClick={this.handleNavClick} href="/search" activeClassName="is-active">Search</Link></li>
                </ul>

                <ul class="Header-mobileNav-list">
                  <li class="Header-mobileNav-listItem Header-mobileNavProfile">
                    <Link onClick={this.handleNavClick} href="/profile" activeClassName="is-active">
                      <div class="Avatar Avatar--small" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
                      <span class="Header-mobileNavProfile-handle">i-need-to-go-outside-more</span>
                    </Link>
                  </li>
                  <li class="Header-mobileNav-listItem"><Link onClick={this.handleNavClick} href="/settings" activeClassName="is-active">Settings</Link></li>
                  <li class="Header-mobileNav-listItem"><Link onClick={this.handleNavClick} href="/logout" activeClassName="is-active">Logout</Link></li>
                </ul>
              </div>
            </nav>

            <div className="Header-mobileNav-invisibilityCloak" onClick={this.closeMobileNav} />
          </div>
        ))}

      </header>
    );
  }
}
