import React from "react";
import FriendsListItem from "./FriendListItem";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import { withRouter } from "react-router-dom";

const FriendsList = props => {
  let filterFriendsList = [];
  const currentUser = props.loggedInUser;

  props.friends.all.map(friend => {
    if (friend.requesteeId === currentUser && friend.accepted === true) {
      filterFriendsList.push(friend);
    } else if (friend.requestorId === currentUser && friend.accepted === true) {
      filterFriendsList.push(friend);
    }
  });

  let listOfFriends = filterFriendsList.map(friend => (
    <FriendsListItem key={friend.id} friend={friend} />
  ));

  return (
    <div>
      <h2 className="text-center">Friends</h2>
      <ListGroup>{listOfFriends}</ListGroup>;
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    friends: state.friends,
    loggedInUser: state.users.loggedInUser.id
  };
};

export default withRouter(connect(mapStateToProps)(FriendsList));
