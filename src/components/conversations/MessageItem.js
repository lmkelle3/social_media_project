import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { ListGroupItem, Row, Col, CardImg } from "reactstrap";

const MessageItem = props => {
  const user = props.users.all.filter(
    user => user.id === props.message.sender_id
  )[0];
  return (
    <div>
      <ListGroupItem>
        <Col>
          <Row>
            <CardImg
              top
              style={{ width: 100 }}
              src={user.photo_url}
              alt="IMG"
            />
            <Col>
              <Row>
                <h5 className="ml-3">From: </h5>
                <div className="ml-1">{user.name}</div>
              </Row>
              <Row>
                <div className="mr-1 ml-3">Sent on:</div>
                <Moment format="MMMM Do YYYY, h:mm:ss a">
                  {props.message.created_at}
                </Moment>
              </Row>
            </Col>
          </Row>
          <Row>
            <div className="mt-2">{props.message.body}</div>
          </Row>
        </Col>
      </ListGroupItem>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(MessageItem);
