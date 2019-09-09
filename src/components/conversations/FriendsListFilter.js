import React from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";

const FriendsListFilter = props => {
  console.log("Props", props);
  return (
    <div>
      <Col>
        <h5>{props.other_user_id.name}</h5>
      </Col>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    otherUser: state.users.all.find(user => user.id === props.other_user_id)
  };
};

export default connect(mapStateToProps)(FriendsListFilter);
