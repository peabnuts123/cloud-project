import { Component, h } from "preact";

interface Props { }

export default class Home extends Component<Props> {
  public render() {
    return (
      <div class="Home">
        <h2>General</h2>
        <div>
          <label for="handle">Handle</label>
          <input id="handle" type="text" style="display: block" />
        </div>

        <h1>H1. Truly a wonder of nature this urban predator</h1>
        <h2>H2. Truly a wonder of nature this urban predator</h2>
        <h3>H3. Truly a wonder of nature this urban predator</h3>
        <h4>H4. Truly a wonder of nature this urban predator</h4>
        <h5>H5. Truly a wonder of nature this urban predator</h5>
        <h6>H6. Truly a wonder of nature this urban predator</h6>
        <p>P. Truly a wonder of nature this urban predator. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, incidunt similique id numquam maiores maxime nesciunt corporis accusantium distinctio perspiciatis.</p>
        <a href="https://google.com">A. Truly a wonder of nature this urban predator</a>

        <h4>Home</h4>
        <h4>About</h4>
        <h4>Search</h4>
      </div>
    );
  }
}
