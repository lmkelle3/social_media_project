import React from "react";
import Status from "./Status";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

const mapStateToProps = (state, props) => {
  let currentPage = props.location.pathname;

  if (currentPage === "/homepage") {
    return {
      statuses: state.statuses
    };
  } else if (currentPage === `/profile/${props.match.params.user_id}`) {
    return {
      statuses: state.statuses.filter(status => {
        return status.user_id === Number(props.match.params.user_id);
      })
    };
  }
};
export default withRouter(connect(mapStateToProps)(StatusList));
