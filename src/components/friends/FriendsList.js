import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const FriendsList = props => {
  // console.log("FRIENDS PROPS:", props);
  // let listOfStatuses = props.statuses.map(status => (
  //   <Status key={status.id} status={status} />
  // ));
  return "My Freaking Friends";
  //   } else {
  //     return <div> Sorry Fam... </div>;
  //   }
  // };
};
export default withRouter(connect()(FriendsList));
