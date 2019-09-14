import { Component, h } from 'preact';

import ShareBar from '@app/components/posts/share-bar';

interface Props { }
interface State { }

export default class PostWithImage extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div class="PostWithImage">
        <img class="PostWithImage-image" src="https://images.unsplash.com/photo-1462993340984-49bd9e0f32dd" alt="Image attached to post"/>

        <div class="PostWithImage-contentContainer">

          {/* <div class="Grid"> */}
            {/* <div class="Grid-item col--postAvatar xcol-1of5 xcol-md-1of10"> */}
            <div class="PostWithImage-avatarColumn">
              <div class="Avatar Avatar--large" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
            </div>
            {/* <div class="Grid-item col--postContent xcol-4of5 xcol-md-9of10"> */}
            <div class="PostWithImage-contentColumn">
              <div class="PostWithImage-titleBar">
                <strong class="PostWithImage-handle">i-need-to-get-outside-more</strong>
                <span class="PostWithImage-timestamp">24m ago</span>
              </div>

              <p class="PostWithImage-message">Here is a nice photo I found of what outside looks like apparently. Maybe it is worth considering?</p>

              <ShareBar numComments={1318} />
            </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
