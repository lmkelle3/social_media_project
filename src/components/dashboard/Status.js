import React from "react";
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
import { Link } from "react-router-dom";

const Status = props => {
  if (props.user) {
    return (
      <div className="container">
        <Card className="mt-2">
          <Row>
            <Col sm="3">
              <CardImg
                top
                style={{ width: 120 }}
                src={props.user.photo_url}
                alt="IMG"
              />
            </Col>
            <Col>
              <CardTitle>
                <div>
                  <h5>
                    <Link to={`/profile/${props.user.id}`}>
                      {props.user.name}
                    </Link>
                  </h5>
                </div>
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
  } else {
    return <div>...loading</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    user: state.users.all.filter(user => user.id === props.status.user_id)[0]
  };
};
export default connect(mapStateToProps)(Status);
