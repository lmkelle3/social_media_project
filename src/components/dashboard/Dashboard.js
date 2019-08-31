import React from "react";
import { Row, Col } from "reactstrap";
import NewStatusForm from "./NewStatusForm";
import StatusList from "./StatusList";
import Misc from "./Misc";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row>
        <Col>
          <NewStatusForm />
          <StatusList />
        </Col>
        <Misc />
      </Row>
    </div>
  );
};

export default Dashboard;
