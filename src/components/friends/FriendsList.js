import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import { withRouter } from "react-router-dom";

const FriendsList = props => {
  //   if (props.friends) {
  let listOfFriends = props.friends.map(friend => {
    <Friends key={friend.id} friend={friend} />;);
  }
  return <ListGroup>{listOfFriends}</ListGroup>;
  //   } else {
  //     return <div> Sorry Fam... </div>;
  //   }
};

const mapStateToProps = (state, props) => {
  return {
    // user: state.users.filter(user => user.id === props.friend-requests.)[0]
    friends: state.friends
  };
};

export default withRouter(connect(mapStateToProps)(FriendsList));
