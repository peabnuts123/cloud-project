import { Component, h } from 'preact';

import SocialBar from '@app/components/posts/social-bar';

interface Props { }
interface State { }

export default class PostWithImage extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div class="PostWithImage">
        {/* Post image */}
        <img class="PostWithImage-image" src="https://images.unsplash.com/photo-1462993340984-49bd9e0f32dd" alt="Image attached to post"/>

        {/* Post body */}
        <div class="PostWithImage-bodyContainer">
            {/* Avatar column */}
            <div class="PostWithImage-avatarColumn">
              <div class="Avatar Avatar--large" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
            </div>

            {/* Content column */}
            <div class="PostWithImage-contentColumn">
              {/* Title bar */}
              <div class="PostWithImage-titleBar">
                <strong class="PostWithImage-handle">i-need-to-get-outside-more</strong>
                <span class="PostWithImage-timestamp">24m ago</span>
              </div>

              {/* Message */}
              <p class="PostWithImage-message">Here is a nice photo I found of what outside looks like apparently. Maybe it is worth considering?</p>

              {/* Social bar */}
              <SocialBar numComments={1318} />
            </div>
        </div>
      </div>
    );
  }
}
