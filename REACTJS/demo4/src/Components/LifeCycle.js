import React, { Component } from "react";

class LifeCycle extends Component {
  // Hàm constructor
  constructor(props) {
    super(props);
    console.log("1. constructor");
    this.state = {
      message: "Hello VTI",
    };
  }
  // Hàm handleChangeStage
  handleChangeStage = () => {
    this.setState({
      message: "Hello DAONQ",
    });
  };
  // Hàm render()
  render() {
    console.log("2. render");

    return (
      <div>
        <div>
          <h3>{this.state.message}</h3>
          <button onClick={this.handleChangeStage}>Change State</button>
        </div>
      </div>
    );
  }
  //
  componentDidUpdate() {
    console.log("4. componentDidUpdate ");
  }
  // Hàm componentDidMount
  componentDidMount() {
    console.log("3. componentDidMount ");
  }
  //

  componentWillUnmount() {
    console.log("5. componentWillUnmount ");
  }
}

export default LifeCycle;