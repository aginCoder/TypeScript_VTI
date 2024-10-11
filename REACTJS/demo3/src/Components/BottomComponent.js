import React from "react";

function BottomComponent(props) {
  //
  // let myClass = props.myClass;
  // let myName = props.myName;
  // Destructuring
  let { myClass, myName, headingBottom, data } = props;

  // console.log("myClass: ", myClass);
  // console.log("myName: ", myName);
  console.log("data From Bottom: ", data);
  //
  props.getDataFromBottom(".....Data sent from Bottom to App ....");
  //
  return (
    <>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">{headingBottom}</h3>
            </div>
            <div className="panel-body">
              <textarea className="form-control" rows="3">
                Hello VTI
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomComponent;