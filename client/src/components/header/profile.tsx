import { Component, h } from 'preact';
import { Link } from 'preact-router';

interface Props { }
interface State { }
export default class Profile extends Component<Props, State> {
  public state: State = {};

  public render() {
    return (
      <div class="HeaderProfile">
        <span class="HeaderProfile-handle">i-need-to-go-outside-more</span>
        <Link href="/settings">
          <div class="Avatar Avatar--medium HeaderProfile-avatar" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
        </Link>
      </div>
    );
  }
}
