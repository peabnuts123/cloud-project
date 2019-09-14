import { Component, h } from 'preact';

import ChevronLeftSVG from '!!raw-loader!feather-icons/dist/icons/chevron-left.svg';
import MenuSVG from '!!raw-loader!feather-icons/dist/icons/menu.svg';
import MessageCircleSVG from '!!raw-loader!feather-icons/dist/icons/message-circle.svg';
import ShareSVG from '!!raw-loader!feather-icons/dist/icons/share.svg';

export enum IconType {
  ChevronLeft = "Chevron Left",
  Menu = "Menu",
  MessageCircle = "Message Circle",
  Share = "Share",
}

interface Props {
  type: IconType;
  class?: string;
}
export default class Icon extends Component<Props> {
  private getIconSvg() {
    switch (this.props.type) {
      case IconType.ChevronLeft:
        return ChevronLeftSVG;
      case IconType.Menu:
        return MenuSVG;
      case IconType.MessageCircle:
        return MessageCircleSVG;
      case IconType.Share:
        return ShareSVG;
    }
  }

  public render() {
    const svgMarkup = this.getIconSvg();
    const classNames = this.props.class || "";

    return (
      <span class={"Icon " + classNames} role="img" aria-label={this.props.type + " icon"} dangerouslySetInnerHTML={{ __html: svgMarkup }} />
    );
  }
}
