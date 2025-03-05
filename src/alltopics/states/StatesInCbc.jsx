import { Component } from "react";

class StatesInCbc extends Component {
  state = { text: "Hiii" }; // Initializing state

  updateState = () => {
    this.setState({ text: "Bye" });
  };
  render() {
    console.log(this);
    return (
      <div>
        <h1>States In Class Based Component </h1>
        <h2>{this.state.text}</h2>
        <button onClick={this.updateState}>Change</button>
      </div>
    );
  }
}
export default StatesInCbc;
