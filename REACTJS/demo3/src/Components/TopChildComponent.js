import React, { Component } from "react";

class TopChildComponent extends Component {
  //
  render() {
    let { dataToTopChild } = this.props;
    console.log("dataToTopChild: ", dataToTopChild);

    return (
      <div>
        <h3>This is TopChild Component</h3>
      </div>
    );
  }
}

export default TopChildComponent;