import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

const ConvoListItem = props => {
  return (
    <div>
      <Link to={`${props.otherUser.id}`}>
        <ListGroupItem>{props.otherUser.name}</ListGroupItem>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    otherUser: state.users.all.find(user => user.id === props.other_user_id)
  };
};

export default connect(mapStateToProps)(ConvoListItem);
