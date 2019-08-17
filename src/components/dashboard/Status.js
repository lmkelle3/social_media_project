import React, { Component } from "react";
import { Media, Button } from "reactstrap";
import { connect } from "react-redux";
// import { deleteStatus } from "../../store/users/actions";
import Moment from "react-moment";

const Status = props => {
  console.log("Status Props", props);
  return (
    <div className="container">
      <Media>
        <Media left href="https://via.placeholder.com/100" />
        <Media
          object
          src="https://via.placeholder.com/100"
          alt="Generic placeholder image"
        />
        <Media body>
          <Media className="d-flex">
            <div>
              <div>User Name</div>
              <Moment className="sm">{props.status.createdAt}</Moment>
            </div>
          </Media>
          <div className="d-flex">
            <div className="content">{props.status.content}</div>
          </div>
          <Button className="btn-sm" color="primary">
            Reply
          </Button>
        </Media>
      </Media>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses
  };
};

export default connect(mapStateToProps)(Status);
