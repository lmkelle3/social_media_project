import React from "react";
import ConvoListItem from "./ConvoListItem";

import { connect } from "react-redux";
import { ListGroup, Col, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

const ConversationsList = props => {
  if (props.conversations) {
    // let filterConvoList = [];
    // const currentUser = props.loggedInUser;

    // props.conversations.map(convo => {
    //   if (!convo.includes(convo.recipient_id) && !acc.includes(msg.sender_id) {
    //     filterConvoList.push(friend);
    //   } else if (
    //     friend.requestorId === currentUser &&
    //     friend.accepted === true
    //   ) {
    //     filterConvoList.push(friend);
    //   }
    // });

    console.log("CONVOPROPS:", props.conversations);
    let listOfConvos = props.conversations.map((id, i) => (
      <ConvoListItem key={i} other_user_id={id} />
    ));
    return (
      <div>
        <Col>
          <Row>
            <h3 className="mt-2">Conversations List</h3>
          </Row>
          <Row>
            <ListGroup>{listOfConvos}</ListGroup>
          </Row>
        </Col>
      </div>
    );
  } else {
    return <div> Sorry Fam... </div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    conversations: state.messages.all.reduce((acc, msg) => {
      if (
        msg.recipient_id === state.users.loggedInUser.id &&
        !acc.includes(msg.sender_id)
      ) {
        acc.push(msg.sender_id);
      } else if (
        msg.sender_id === state.users.loggedInUser.id &&
        !acc.includes(msg.recipient_id)
      ) {
        acc.push(msg.recipient_id);
      }
      return acc;
    }, [])
  };
};

export default withRouter(connect(mapStateToProps)(ConversationsList));
