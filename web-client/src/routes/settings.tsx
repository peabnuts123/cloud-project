import { Component, h } from 'preact';

import PostWithImage from "@app/components/post/with-image";
import Post from "@app/components/post";
import ChangeAvatar from '@app/components/avatar/change';
import Textarea from '@app/components/input/textarea';

interface Props { }
interface State { }
export default class Settings extends Component<Props, State> {
  public state: State = {};

  public render() {
    return (
      <div class="SettingsRoute">
        <div class="Container">
          <div class="SettingsRoute-container">
            <div class="SettingsRoute-avatarContainer">
              <ChangeAvatar />
            </div>

            <h1>General</h1>

            <form class="Form" action="#">
              <div class="Form-input">
                <label class="Form-inputLabel" for="input_handle">Handle</label>
                <input class="Input Input--text" type="text" id="input_handle"/>
              </div>

              <div class="Form-input">
                <label class="Form-inputLabel" for="input_bio">Bio</label>
                <Textarea id="input_bio" />
              </div>

              <div class="Form-input">
                <label class="Form-inputLabel" for="input_url">Handle</label>
                <input class="Input Input--text" type="url" id="input_url"/>
              </div>

              <button type="submit" class="Button Form-button">Save</button>
            </form>

            <h1>Delete account</h1>

            <p>If you want, you can choose to delete your account. You will not be able to recover your account or your posts(?), they will be gone forever.</p>

            <button class="Button Button--secondary Form-button">Delete account</button>
          </div>
        </div>
      </div>
    );
  }
}
