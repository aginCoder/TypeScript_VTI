import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function InputForm(props) {
  let { onHandleCreateNewAccount, listDepartment, listPosition } = props;

  // console.log("listDepartment_InputForm: ", listDepartment);

  //   Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [Email, setEmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Department, SetDepartment] = useState("");
  let [Postion, SetPostion] = useState("");

  //
  let handleCreate = () => {

    let accountNew = {
      email: Email,
      username: Username,
      fullname: Fullname,
      departmentId: Department,
      positionId: Postion,
    };
    onHandleCreateNewAccount(accountNew);
    // console.log("accountNew: ", accountNew);
  };

  //
  let departmentitems = listDepartment ? listDepartment.map((dep) => (
    <option key={dep.id} value={dep.id}>{dep.name}</option>
  )) : [];

  let positionitems = listPosition ? listPosition.map((pos) => (
    <option key={pos.id} value={pos.id}>{pos.name}</option>
  )) : [];
  //
  return (
    <>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            id="Email"
            name="Email"
            placeholder="Input Email"
            type="email"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>

        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={Username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={Fullname}
            onChange={(event) => {
              SetFullname(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              SetDepartment(event.target.value);
            }}
          >
            {departmentitems}
            <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option>
          </Input>
        </FormGroup>

        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input
            id="Postion"
            name="Postion"
            type="select"
            value={Postion}
            onChange={(event) => {
              SetPostion(event.target.value);
            }}
          >
            {positionitems}
            <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option>
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger">Reset</Button>
    </>
  );
}

export default InputForm;