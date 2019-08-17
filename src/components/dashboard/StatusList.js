import React from "react";
import Status from "./Status";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";

const StatusList = props => {
  if (props.statuses) {
    let listOfStatuses = props.statuses.map(status => (
      <Status key={status.id} status={status} />
    ));
    return <ListGroup>{listOfStatuses}</ListGroup>;
  } else {
    return <div> Sorry Fam... </div>;
  }
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses
  };
};
export default connect(mapStateToProps)(StatusList);
