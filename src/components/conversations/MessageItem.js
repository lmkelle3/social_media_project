import React from "react";
import { ListGroupItem } from "reactstrap";

const MessageItem = props => {
  return (
    <ListGroupItem>
      <div>From: {props.message.sender_id}</div>
      <div>{props.message.body}</div>
    </ListGroupItem>
  );
};

export default MessageItem;
