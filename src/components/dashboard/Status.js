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
import Moment from "react-moment";

const Status = props => {
  console.log("Users props:", props.users);
  return (
    <div className="container">
      <Card className="mt-2">
        <Row>
          <Col sm="3">
            <CardImg
              top
              style={{ width: 150 }}
              src={props.users.photo_url}
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
  // } else {
  //   return <div>Loading...</div>;
  // }
};

// const mapStateToProps = (state, props) => {
//   return {
//     user: state.users.all.filter(user => user.id === props.status.userId)[0]
//   };
// };

export default connect()(Status);
