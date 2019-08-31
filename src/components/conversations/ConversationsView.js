import React from "react";
import MessageItem from "./MessageItem";
import { ListGroup } from "reactstrap";
import { connect } from "react-redux";
import ConversationsList from "./ConversationsList";

const ConversationsView = props => {
  let listOfMessages =
    props.messages && props.messages.length
      ? props.messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))
      : [];

  console.log("LIST OF MESSAGES:", listOfMessages);
  return (
    <div>
      <ListGroup>{listOfMessages}</ListGroup>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log("CVSTATE:", state);
  console.log("CVPROPS:", props);

  return {
    messages: props
      ? state.messages.all.filter(
          message =>
            message.sender_id === props.other_person ||
            message.recipient_id === props.other_person
        )
      : []
  };
};
export default connect(mapStateToProps)(ConversationsView);
