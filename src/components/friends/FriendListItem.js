import React from "react";
import { ListGroupItem, Row, Col, CardImg, Button } from "reactstrap";
import { connect } from "react-redux";

const FriendListItem = props => {
  const otherUser = props.users.find(
    user => user.id === props.friend.requesteeId
  );
  if (props.friend) {
    return (
      <div>
        <ListGroupItem>
          <Col>
            <Row>
              <Col>
                <CardImg
                  top
                  style={{ width: 100 }}
                  src={otherUser.photo_url}
                  alt="IMG"
                />
              </Col>
              <Col>
                <h5>{otherUser.name}</h5>
              </Col>
            </Row>
            <div className="mt-2 ml-5">
              <Button size="sm" color="primary">
                Send New Message
              </Button>
            </div>
          </Col>
        </ListGroupItem>
      </div>
    );
  } else {
    return <div> You suck...</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    currentUser: state.currentUser,
    friends: state.friends.all,
    users: state.users.all
  };
};

export default connect(mapStateToProps)(FriendListItem);
