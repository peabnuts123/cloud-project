import { Component, h } from 'preact';

import PostWithImage from "@app/components/post/with-image";
import Post from "@app/components/post";

interface Props { }
interface State { }
export default class ProfileRoute extends Component<Props, State> {
  public state: State = {};

  public render() {
    return (
      <div class="ProfileRoute">
        <div class="Container">
          <div class="ProfileRoute-profile">
            <div class="ProfileRoute-avatarContainer">
              <div class="Avatar Avatar--xLarge" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
            </div>

            <div className="ProfileRoute-handle">i-need-to-go-outside-more</div>

            <button class="Button">Follow</button>

            <p class="ProfileRoute-bio">
              The darkness is where I am the most comfortable. The piercing brightness of day is painful to me.<br/>
              <br/>
              I also like to eat pizza and play video games.<br/>
            </p>

            <a class="ProfileRoute-url" href="http://www.geocities.com/the-dark-night">www.geocities.com/the-dark-night</a>
          </div>

          <PostWithImage/>
          <Post />
        </div>
      </div>
    );
  }
}
