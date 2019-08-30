import React from "react";
import ConversationsList from "./ConversationForm";
import ConversationsView from "./ConversationsView";
import ConversationForm from "./ConversationsList";

const Conversations = () => {
  return (
    <div className="conversations">
      <ConversationsList />
      <ConversationsView />
      <ConversationForm />
    </div>
  );
};

export default Conversations;
