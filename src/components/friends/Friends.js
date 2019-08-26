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
import { Link } from "react-router-dom";

const Friends = props => {
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
            </CardTitle>
            <CardBody>
              <Button className="btn-sm" color="primary">
                Delete Friend
              </Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    friends: state.friends,
    user: state.users.filter(user => user.id === props.friends.requesteeId)
  };
};
export default connect(mapStateToProps)(Friends);
