import { Component, h } from 'preact';

import Icon, { IconType } from '@app/components/icon';

interface Props { }
interface State { }
export default class BackBar extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div class="BackBar">
        <Icon type={IconType.ChevronLeft} />
        <span>Back</span>
      </div>
    );
  }
}
