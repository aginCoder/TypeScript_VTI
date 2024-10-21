import React from "react";
import { Button, Row, Col } from "reactstrap";

function CreateButton(props) {
  let { onHandleCreateButton } = props;

  let handleCreateNewAccount = () => {
    onHandleCreateButton();
  };

  return (
    <>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Button
            style={{
              background: "var(--bs-danger)"
            }}
            onClick={handleCreateNewAccount}
          >
            Create New Account
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default CreateButton;
