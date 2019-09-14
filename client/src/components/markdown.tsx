import { Component, h } from 'preact';
import marked, { MarkedOptions } from 'marked';
import DOMPurify from 'dompurify';

const MARKED_OPTIONS: MarkedOptions = {
  breaks: true,
  gfm: true,
  headerIds: false,
};
const SANITIZE_OPTIONS = {
  ALLOWED_TAGS: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'em', 'strong', 'pre', 'code', 'br',
    'p',
  ],
};

interface Props {
  source: string;
  options?: MarkedOptions;
}
interface State { }
export default class Markdown extends Component<Props, State> {
  public state = {};

  public render() {
    const markedOptions = Object.assign({}, this.props.options, MARKED_OPTIONS);
    const html = DOMPurify.sanitize(marked(this.props.source, markedOptions), SANITIZE_OPTIONS);

    return (
      <div class="Markdown" dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}
