import React from "react";
import {
  Card,
  CardTitle,
  Row,
  Col,
  CardImg,
  Button,
  CardBody,
  NavItem,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const ConvoListItem = props => {
  if (props.messages) {
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
                  {props.messages.created_at}
                </Moment>
              </CardTitle>
              <CardBody>
                <div>{props.messages.subject}</div>
              </CardBody>
              <NavItem>
                <NavLink href="/conversations">
                  <Button>See Conversations</Button>
                </NavLink>
              </NavItem>
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
    messages: state.messages,
    user: state.users.filter(user => user.id === props.status.userId)[0]
  };
};
export default connect(mapStateToProps)(ConvoListItem);
