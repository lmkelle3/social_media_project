import React from "react";
import MessageItem from "./MessageItem";
import NewMessageForm from "./NewMessageForm";
import { ListGroup, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import ConversationForm from "./ConversationForm";

const ConversationsView = props => {
  let listOfMessages = props.messages.map(message => (
    <MessageItem key={message.id} message={message} />
  ));
  if (props.messages) {
    return (
      <div className="mt-2">
        <Col>
          <Row>
            <h3>Conversation View</h3>
          </Row>
          <Row>
            <ListGroup>{listOfMessages}</ListGroup>
          </Row>
          <Row>
            <NewMessageForm />
          </Row>
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
  };
};

export default connect(mapStateToProps)(ConversationsView);
