import React from "react";
import ConversationsList from "./ConversationsList";
import ConversationsView from "./ConversationsView";

import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

const Conversations = props => {
  let other_person = props.match ? Number(props.match.params.id) : 0;
  return (
    <div className="conversations">
      <Row>
        <Col>
          <Row>
            <div className="mt-2 ml-5">
              <Button tag={Link} to={`/conversations`}>
                Start New Conversation
              </Button>
            </div>
          </Row>
          <ConversationsList other_person={other_person} />
        </Col>
        <Col>
          <ConversationsView other_person={other_person} />
        </Col>
      </Row>
    </div>
  );
};

export default Conversations;
