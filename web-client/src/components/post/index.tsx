import { Component, h } from 'preact';

import PostRegular from './regular';
import PostFullWidth from './full-width';

export interface PostProps {
}

interface Props extends PostProps {
  fullWidth?: boolean;
}
interface State { }
export default class Post extends Component<Props, State> {
  public static defaultProps: Props = {
    fullWidth: false,
  };
  public state = {};

  public render() {
    const { fullWidth } = this.props;
    if (fullWidth) {
      return (<PostFullWidth />);
    } else {
      return (<PostRegular />);
    }
  }
}
