import React from "react";
import Status from "./Status";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ListGroup } from "reactstrap";

const StatusList = props => {
  console.log("PROPS:", props);
  if (props.statuses) {
    console.log("P.STATUS:", props.statuses);
    let listOfStatuses = props.statuses.map(status => (
      <Status key={status.id} status={status} />
    ));
    return <ListGroup>{listOfStatuses}</ListGroup>;
  } else {
    return <div> Sorry Fam... </div>;
  }
};

const mapStateToProps = (state, props) => {
  let currentPage = props.location.pathname;
  console.log("Current:", currentPage);
  let theStatuses = [];

  switch (currentPage) {
    case "/homepage":
      // return;
      theStatuses = state.statuses.filter(
        status => status.user_id == props.match.params.user_id
      );
      break;
    case `/profile/${props.match.params.user_id}`:
      // return;
      theStatuses = state.statuses.filter(
        status => status.userId == props.match.params.user_id
      );
      break;
    default:
      return;
  }
  return {
    statuses: theStatuses
  };
};
export default withRouter(connect(mapStateToProps)(StatusList));
