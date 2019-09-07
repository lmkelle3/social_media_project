import React from "react";
import MessageItem from "./MessageItem";
import NewMessageForm from "./NewMessageForm";
import ConversationForm from "./ConversationForm";

import { ListGroup, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ConversationsView = props => {
  if (props.messages.length) {
    // let filteredMessages = [];

    // const loggedInUser = props.loggedInUser;
    // const selectedUser = props.users.find(user => user.id === props.other_person);

    // props.messages.filter(message => {
    //   if (message.sender_id === loggedInUser.id) {
    //     filteredMessages.push(message);
    //   } else if (message.recipient_id === loggedInUser.id) {
    //     filteredMessages.push(message);
    //   }
    // });

    const listOfMessages = props.messages.map(message => (
      // if (message.sender_id || message.recipient_id === selectedUser) {
      <MessageItem key={message.id} message={message} />
    ));
    // }

    console.log("ViewProps:", props);
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
    return (
      <div>
        <ConversationForm />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  console.log("OP", props.other_person);
  return {
    messages: state.messages.all.filter(
      message =>
        (message.sender_id == Number(props.other_person) &&
          message.recipient_id == state.users.loggedInUser.id) ||
        (message.recipient_id == Number(props.other_person) &&
          message.sender_id == state.users.loggedInUser.id)
    ),
    users: state.users.all,
    loggedInUser: state.users.loggedInUser
  };
};

export default withRouter(connect(mapStateToProps)(ConversationsView));
