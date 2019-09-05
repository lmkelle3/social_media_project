import React from "react";
import { ListGroupItem, Row, Col } from "reactstrap";

const MessageItem = props => {
  return (
    <div>
      <ListGroupItem>
        <Col>
          <Row>
            <h5>From: </h5> {props.sender}
          </Row>
          <div>{props.message.body}</div>
        </Col>
      </ListGroupItem>
    </div>
  );
};

// const mapStateToProps = (state, props) => {
//   return {

//   }
//   ||
//   message.recipient_id === props.other_person
//     )
//   };
// };

export default MessageItem;
