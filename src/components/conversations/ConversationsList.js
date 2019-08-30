import React from "react";
import ConvoListItem from "./ConvoListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ListGroup } from "reactstrap";

const ConversationsList = props => {
  console.log("CONVERSATIONSLIST PROPS:", props);
  if (props.messages) {
    let listOfMessages = props.messages.map(message => (
      <ConvoListItem key={message.id} message={message} />
    ));
    return <ListGroup>{listOfMessages}</ListGroup>;
  } else {
    return <div> Sorry Fam... </div>;
  }
};

const mapStateToProps = (state, props) => ({
  messages: props.messages
  //   conversationsWithUsers: state.messages.reduce((acc, msg) => {
  //     if (!acc.includes(msg.recipient_id) && !acc.includes(msg.sender_id)) {
  //       if (msg.recipient_id === state.users.loggedInUser.id) {
  //         acc.push(msg.sender_id);
  //       } else {
  //         acc.push(msg.recipient_id);
  //       }
  //     }
  //     return acc;
  //   }, [])
});

export default withRouter(connect(mapStateToProps)(ConversationsList));
