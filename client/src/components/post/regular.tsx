import { Component, h } from 'preact';

import SocialBar from '@app/components/post/social-bar';
import Markdown from '@app/components/markdown';
import { PostProps } from '@app/components/post';

const markdownSource = `
# Hello world!

This is a sample post for the [Ego](https://github.com/peabnuts123/cloud-project) social network. In fact, this is the first post on the network!

This is just a sample of what kind of content you might post here. Ego supports markdown formatting in posts, so you can _really_ **express** yourself.

Enjoy your stay!
 – Jeff
`;

interface State { }
export default class Post extends Component<PostProps, State> {
  public state = {};

  public render() {
    return (
      <div class="Post">
        {/* Post body */}
        <div class="Post-bodyContainer">
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
            <p class="Post-message">
              <Markdown source={markdownSource} />
            </p>

            {/* Social bar */}
            <SocialBar numComments={1318} />
          </div>
        </div>
      </div>
    );
  }
}
