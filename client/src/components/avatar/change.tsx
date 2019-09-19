import { Component, h } from 'preact';

interface Props { }
interface State { }
export default class ChangeAvatar extends Component<Props, State> {
  public state: State = {};

  public render() {
    return (
      <div class="Avatar Avatar--xLarge AvatarChange"
        style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)"
        tabIndex={0}
      >
        <div class="AvatarChange-labelContainer">
          <div class="AvatarChange-label">Change</div>
        </div>
      </div>
    );
  }
}
