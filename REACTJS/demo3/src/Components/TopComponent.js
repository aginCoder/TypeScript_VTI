import React, { Component } from "react";
import TopChildComponent from "./TopChildComponent";

class TopComponent extends Component {
  // Contrutor: là hàm được gọi đầu tiên trong Class Component
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     click_number: 0,
  //     a: "daonq",
  //     b: "vti",
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  // Khai báo biến click_number
  // click_number = 0;

  // Viết hàm xử lý handleSentData
  handleSentData = () => {
    // let { getDataFromTop } = this.props;
    // this.click_number = this.click_number + 1;
    // console.log(`this.click_number:  ${this.click_number}`);
    // this.render();
    // this.setState({
    //   click_number: this.state.click_number + 1,
    // });
    console.log("Bạn vừa nhập vào ô Input dữ liệu là: ", this.state.data);

    let dataFromApp = "....data_From_Top_To_Bottom...";
    this.props.getDataFromTop(dataFromApp);
  };

  // Khai báo hàm handleChange
  handleChange = (event) => {
    // console.log("event: ", event);
    // console.log("event.target.value: ", event.target.value);

    this.setState({
      data: event.target.value,
    });
    // console.log("data: ", this.state.data);
  };
  render() {
    //Nhận lại dữ liệu
    // let dataFromAppToTopProps = this.props.dataFromAppToTopProps;
    // let x = this.props.x;
    // let y = this.props.y;
    // let student = this.props.student;

    // Destructuring
    let { dataFromAppToTopProps, x, y, student, headingTop, dataToTopChild } =
      this.props;

    //
    // console.log("v_dataFromAppToTopProps: ", dataFromAppToTopProps);
    // console.log("x: ", x);
    // console.log("y: ", y);
    // console.log("student: ", student);
    // console.log("headingTop: ", headingTop);
    //
    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">{headingTop}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      // value={this.state.click_number}
                      value={this.state.data}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.handleSentData}
                    >
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TopChild */}
        <div>
          <TopChildComponent dataToTopChild={dataToTopChild} />
        </div>
      </>
    );
  }
}

export default TopComponent;