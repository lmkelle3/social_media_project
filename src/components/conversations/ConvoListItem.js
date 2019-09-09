import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem, Row, Col, CardImg, Button } from "reactstrap";
import { connect } from "react-redux";

const ConvoListItem = props => {
  return (
    <div>
      <Link to={`/conversations/${props.other_user_id}`}>
        <ListGroupItem>
          <Col>
            <Row>
              <Col>
                <CardImg
                  top
                  style={{ width: 100 }}
                  src={props.otherUser.photo_url}
                  alt="IMG"
                />
              </Col>
              <Col>
                <h5>{props.otherUser.name}</h5>
              </Col>
            </Row>
            <div className="mt-2 ml-5">
              <Button size="sm" color="primary">
                Send New Message
              </Button>
            </div>
          </Col>
        </ListGroupItem>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    otherUser: state.users.all.find(user => user.id === props.other_user_id)
  };
};

export default connect(mapStateToProps)(ConvoListItem);
