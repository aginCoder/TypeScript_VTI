// import "./App.css";
// import BottomComponent from "./Components/BottomComponent";
// import TopComponent from "./Components/TopComponent";

// function App() {
//   let dataFromAppToTop = "data_From_App_To_Top";
//   let student = {
//     id: 1,
//     name: "daonq1",
//     class: "Railway85",
//   };

//   let headingTop = "----- Component TOP  -----";
//   // Khai báo hàm callback getDataFromTop
//   let getDataFromTop = (data_param_Top) => {
//     //
//     console.log(".....getDataFromTop.... App");
//     console.log("data_param: ", data_param_Top);
//   };

//   // Khai báo hàm callback getDataFromBottom
//   let getDataFromBottom = (data_param_Bottom) => {
//     //
//     console.log("data_param_Bottom: ", data_param_Bottom);
//   };
//   //
//   return (
// <div className="container">
//   <TopComponent
//     dataFromAppToTopProps={dataFromAppToTop}
//     x="daonq"
//     y="VTI"
//     student={student}
//     headingTop={headingTop}
//     getDataFromTop={getDataFromTop}
//   />
//   <BottomComponent
//     myClass="Railway 85"
//     myName="daonq"
//     headingBottom="----- Component Bottom-------"
//     getDataFromBottom={getDataFromBottom}
//   />
// </div>
//   );
// }

import React, { Component } from "react";
import "./App.css";
import BottomComponent from "./Components/BottomComponent";
import TopComponent from "./Components/TopComponent";

class App extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  //
  dataFromAppToTop = "data_From_App_To_Top";
  student = {
    id: 1,
    name: "daonq1",
    class: "Railway85",
  };

  headingTop = "----- Component TOP  -----";
  // Khai báo hàm callback getDataFromTop
  getDataFromTop = (data_param_Top) => {
    //
    // console.log(".....getDataFromTop.... App");
    // console.log("data_param: ", data_param_Top);
    this.setState({
      data: data_param_Top,
    });
  };

  // Khai báo hàm callback getDataFromBottom
  getDataFromBottom = (data_param_Bottom) => {
    //
    // console.log("data_param_Bottom: ", data_param_Bottom);
  };

  //
  render() {
    let dataToTopChild = "dataToTopChild";
    return (
      <div className="container">
        <TopComponent
          dataFromAppToTopProps={this.dataFromAppToTop}
          x="daonq"
          y="VTI"
          student={this.student}
          headingTop={this.headingTop}
          getDataFromTop={this.getDataFromTop}
          dataToTopChild={dataToTopChild}
        />
        <BottomComponent
          myClass="Railway 85"
          myName="daonq"
          headingBottom="----- Component Bottom-------"
          getDataFromBottom={this.getDataFromBottom}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;