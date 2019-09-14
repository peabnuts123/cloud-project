import { Component, h } from 'preact';

import PostWithImageRegular from './regular';
import PostWithImageFullWidth from './full-width';

export interface PostWithImageProps {
}

interface Props extends PostWithImageProps {
  fullWidth?: boolean;
}
interface State { }
export default class PostWithImage extends Component<Props, State> {
  public static defaultProps: Props = {
    fullWidth: false,
  };
  public state = {};

  public render() {
    const { fullWidth } = this.props;
    if (fullWidth) {
      return (<PostWithImageFullWidth />);
    } else {
      return (<PostWithImageRegular />);
    }
  }
}
