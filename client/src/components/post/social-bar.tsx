import { Component, h } from 'preact';

import Icon, { IconType } from "@app/components/icon";

interface Props {
  onClickComments?: () => void;
  onClickShare?: () => void;
  numComments: number;
}
interface State { }
export default class SocialBar extends Component<Props, State> {
  public static defaultProps: Props = {
    onClickComments: () => { },
    onClickShare: () => { },
    numComments: 0,
  };
  public state = {};

  public render() {
    const { numComments, onClickComments, onClickShare } = this.props;

    return (
      <div class="SocialBar">
        <div class="SocialBar-left">
          <Icon type={IconType.MessageCircle} />
          <span>{numComments} comments</span>
        </div>
        <div class="SocialBar-right">
          <span>Share</span>
          <Icon type={IconType.Share} />
        </div>
      </div>
    );
  }
}
