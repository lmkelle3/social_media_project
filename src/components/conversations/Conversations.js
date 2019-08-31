import React from "react";
import ConversationsList from "./ConversationsList";
import ConversationsView from "./ConversationsView";

const Conversations = props => {
  let other_person = props.match ? Number(props.match.params.id) : 0;
  return (
    <div className="conversations">
      <ConversationsList other_person={other_person} />
      <ConversationsView other_person={other_person} />
    </div>
  );
};

export default Conversations;
