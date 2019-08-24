import React from "react";
import Status from "./Status";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ListGroup } from "reactstrap";

const StatusList = props => {
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
  return {
    statuses: state.statuses.filter(status => {
      console.log("STATUS YO:", status);
      return status.userId == props.match.params.user_id;
    })
  };
};
export default withRouter(connect(mapStateToProps)(StatusList));
