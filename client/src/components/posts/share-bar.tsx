import { Component, h } from 'preact';

import Icon, { IconType } from "@app/components/icon";

interface Props {
  onClickComments?: () => void;
  onClickShare?: () => void;
  numComments: number;
}
interface State { }
export default class ShareBar extends Component<Props, State> {
  public static defaultProps: Props = {
    onClickComments: () => { },
    onClickShare: () => { },
    numComments: 0,
  };
  public state = {};

  public render() {
    const { numComments, onClickComments, onClickShare } = this.props;

    return (
      <div class="ShareBar">
        <div class="ShareBar-left">
          <Icon type={IconType.MessageCircle} />
          <span>{numComments} comments</span>
        </div>
        <div class="ShareBar-right">
          <span>Share</span>
          <Icon type={IconType.Share} />
        </div>
      </div>
    );
  }
}
