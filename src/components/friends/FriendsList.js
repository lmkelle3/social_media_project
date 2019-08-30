import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import { withRouter } from "react-router-dom";

const FriendsList = props => {
  //filter through the list of friends to see if the requesteeID ==  accepted true
  let listOfFriends = props.friends.filter(friend =>
    (friend.accepted == "true")
      .push("")
      .map(friend => <Friends key={friend.id} friend={friend} />)
  );
  return <ListGroup>{listOfFriends}</ListGroup>;
};

const mapStateToProps = (state, props) => {
  return {
    friends: state.friends
  };
};

export default withRouter(connect(mapStateToProps)(FriendsList));
