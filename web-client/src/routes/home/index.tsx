import { Component, h } from "preact";

import PostWithImage from "@app/components/post/with-image";
import Post from "@app/components/post";

interface Props { }

export default class Home extends Component<Props> {
  public render() {
    return (
      <div class="HomeRoute Container">
          <PostWithImage/>
          <Post />
          <Post />
          <PostWithImage/>
          <Post />
          <Post />
      </div>
    );
  }
}
