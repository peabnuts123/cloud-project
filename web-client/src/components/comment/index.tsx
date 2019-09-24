import { Component, h } from 'preact';

interface Props { }
interface State { }
export default class Comment extends Component<Props, State> {
  public state: State = {};

  public render() {
    return (
      <div class="Comment">
        {/* Comment body */}
        <div class="Comment-bodyContainer">
          {/* Avatar column */}
          <div class="Comment-avatarColumn">
            <div class="Avatar Avatar--large" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
          </div>

          {/* Content column */}
          <div class="Comment-contentColumn">
            {/* Title bar */}
            <div class="Comment-titleBar">
              <strong class="Comment-handle">i-need-to-get-outside-more</strong>
              <span class="Comment-timestamp">24m ago</span>
            </div>

            {/* Message */}
            <p class="Comment-message">
              Hey check out my site you can find it at freesites4u (dot) com. I’ll give people using the code “ego’ a free discount ! Good luck everybody!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
