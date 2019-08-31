import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Misc = () => {
  return (
    <div className="m-3">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Miscellaneous</h1>
          <p className="lead">Oh hey there</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Misc;
