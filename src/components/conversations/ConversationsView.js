import React from "react";
import MessageItem from "./MessageItem";
import { ListGroup, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import ConversationForm from "./ConversationForm";

const ConversationsView = props => {
  let listOfMessages = props.messages.map(message => (
    <MessageItem key={message.id} message={message} />
  ));

  if (props.other_person) {
    return (
      <div className="mt-2">
        <Col>
          <Row>
            <h3>Conversation View</h3>
          </Row>
          <ListGroup>{listOfMessages}</ListGroup>
        </Col>
      </div>
    );
  } else {
    return <ConversationForm />;
  }
};

const mapStateToProps = (state, props) => {
  return {
    messages: state.messages.all.filter(
      message =>
        message.sender_id === props.other_person ||
        message.recipient_id === props.other_person
    )
    // sender: state.messages.all.forEach(message => {
    //   return message.sender_id === props.other_person
    //     ? props.otherUser.name
    //     : state.loggedInUser.name;
    // })
  };
};
export default connect(mapStateToProps)(ConversationsView);
