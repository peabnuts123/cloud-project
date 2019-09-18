import { Component, h } from 'preact';

import PostWithImage from '@app/components/post/with-image';
import Post from '@app/components/post';
import BackBar from '@app/components/post/back-bar';
import CreateComment from '@app/components/comment/create';

interface Props { }
interface State { }
export default class PostRoute extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div class="PostRoute">
        <div class="Container Container--noPadding">
          <BackBar />

          <Post fullWidth={true} />
          {/* <PostWithImage fullWidth={true} /> */}
        </div>

        <div class="Container">
          <CreateComment />
        </div>
      </div>
    );
  }
}
