import { Component, h } from 'preact';
import { bind } from 'decko';

interface Props { }
interface State {
  value: string;
}
export default class Textarea extends Component<Props, State> {
  public state: State = {
    value: '',
  };

  @bind
  public onInputChanged(event: Event) {
    const target = event.target as HTMLTextAreaElement | undefined;

    if (target) {
      target.style.height = 'inherit';
      target.style.height = target.scrollHeight + 'px';

      this.setState({
        value: (target as HTMLTextAreaElement).value,
      });
    }
  }

  public render() {
    return (
      <textarea class="Textarea" value={this.state.value} onInput={this.onInputChanged} />
    );
  }
}
