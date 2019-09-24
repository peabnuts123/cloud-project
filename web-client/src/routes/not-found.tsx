import { Component, h } from 'preact';

interface Props { }
interface State { }
export default class NotFound extends Component<Props, State> {
  public state: State = {};

  public render() {
    return (
      <div>
        <h1>Not-found</h1>
      </div>
    );
  }
}
