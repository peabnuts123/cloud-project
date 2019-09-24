import { Component, h } from 'preact';
import Textarea from '../input/textarea';

interface Props { }
interface State { }
export default class CreateComment extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div class="CreateComment">
        <div class="CreateComment-headerBar">
          <div className="CreateComment-headerBarAvatar">
            <div class="Avatar Avatar--medium" style="background-image: url(https://images.unsplash.com/photo-1515921273796-42aa45543058)" />
          </div>

          <button class="Button">Reply</button>
        </div>

        <div className="CreateComment-input">
          <Textarea />
        </div>
      </div>
    );
  }
}
