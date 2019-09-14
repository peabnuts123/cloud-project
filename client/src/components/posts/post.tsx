import { Component, h } from 'preact';

import SocialBar from '@app/components/posts/social-bar';
import Markdown from '@app/components/markdown';

const markdownSource = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia impedit dolorum aliquid, iure ab vel laborum libero architecto sequi?

You can also use _italics_ and **bold**.

<img src="http://google.com" />

<script>alert("Hello")</script>

\`\`\`
import { Component, h } from 'preact';

interface Props { }
interface State { }
export default class Untitled-1 extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div>
        <h1>Untitled-1</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim pariatur adipisci possimus esse minus totam consequatur iure eaque quia inventore!</p>
      </div>
    );
  }
}
\`\`\`
`;

interface Props { }
interface State { }
export default class Post extends Component<Props, State> {
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
