import { Component, h } from 'preact';

import Icon, { IconType } from '@app/components/icon';
import { bind } from 'decko';

interface Props { }
interface State { }
export default class BackBar extends Component<Props, State> {
  public state = {};

  @bind
  public goBack() {
    history.back();
  }

  public render() {
    return (
      <div class="BackBar">
        <div class="BackBar-button" tabIndex={0} onClick={this.goBack}>
          <Icon type={IconType.ChevronLeft} />
          <span>Back</span>
        </div>
      </div>
    );
  }
}
