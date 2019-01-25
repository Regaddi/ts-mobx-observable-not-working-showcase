import * as React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class App extends React.Component {
  @observable count = 0;
  render() {
    return (
      <div>
        <div>{this.count}</div>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
  increment = () => {
    console.log(this.count);
    this.count++;
  };
}

render(<App />, document.getElementById("root"));
