import React, { Component } from "react";
import {
  Card,
  CardTitle,
  Row,
  Col,
  CardImg,
  Button,
  CardBody
} from "reactstrap";
import { connect } from "react-redux";
// import { deleteStatus } from "../../store/users/actions";
import Moment from "react-moment";

const Status = props => {
  console.log("Status Props", props);
  return (
    <div className="container">
      <Card className="mt-2">
        <Row>
          <Col sm="3">
            <CardImg
              top
              style={{ width: 150 }}
              src="https://via.placeholder.com/100"
              alt="IMG"
            />
          </Col>
          <Col>
            <CardTitle>
              <div>User Name</div>
              <Moment format="MMMM Do YYYY, h:mm:ss a">
                {props.status.createdAt}
              </Moment>
            </CardTitle>
            <CardBody>
              <div className="content">{props.status.content}</div>
              <Button className="btn-sm" color="primary">
                Reply
              </Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses
  };
};

export default connect(mapStateToProps)(Status);
