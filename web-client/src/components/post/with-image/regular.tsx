import { Component, h } from 'preact';

import SocialBar from '@app/components/post/social-bar';
import { PostWithImageProps } from '@app/components/post/with-image';

import { route } from 'preact-router';
import { bind } from 'decko';

interface State { }

export default class PostWithImage extends Component<PostWithImageProps, State> {
  public state = {};

  @bind
  public visitFullPost() {
    route('/post/1');
  }

  public render() {
    return (
      <div class="Post PostWithImage">
        {/* Post image */}
        <img class="PostWithImage-image" src="https://images.unsplash.com/photo-1462993340984-49bd9e0f32dd" alt="Image attached to post" />

        {/* Post body */}
        <div class="Post-bodyContainer" onClick={this.visitFullPost}>
          {/* Avatar column */}
          <div class="Post-avatarColumn">
            <div class="Avatar Avatar--large" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
          </div>

          {/* Content column */}
          <div class="Post-contentColumn">
            {/* Title bar */}
            <div class="Post-titleBar">
              <strong class="Post-handle">i-need-to-get-outside-more</strong>
              <span class="Post-timestamp">24m ago</span>
            </div>

            {/* Message */}
            <p class="Post-message">Here is a nice photo I found of what outside looks like apparently. Maybe it is worth considering?</p>

            {/* Social bar */}
            <SocialBar numComments={1318} />
          </div>
        </div>
      </div>
    );
  }
}
