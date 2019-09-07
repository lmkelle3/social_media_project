import React from "react";
import FriendsList from "./FriendsList";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const Friends = props => {
  return (
    <div className="conversations">
      <Row>
        <Col>
          <FriendsList />
        </Col>
        <Col>
          <div>hello world</div>
        </Col>
      </Row>
    </div>
  );
};

export default connect()(Friends);
