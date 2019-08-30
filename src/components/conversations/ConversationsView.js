import React from "react";
import ConversationsList from "./ConversationsList";
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Col,
  Row
} from "reactstrap";
import { connect } from "react-redux";

const ConversationsView = props => {
  if (props.user) {
    return (
      <div className="mt-2">
        <Container>
          <Card>
            <Col>
              <CardImg
                top
                style={{ width: 150 }}
                src={props.user.photo_url}
                alt="IMG"
              />
              <CardTitle>
                <h3>{props.user.name}</h3>
              </CardTitle>
              <CardBody>
                <p className="lead">{props.user.company}</p>
                <button>Start Conversation</button>
              </CardBody>
            </Col>
          </Card>
          <ConversationsList />
        </Container>
      </div>
    );
  } else {
    return <div>...Loading</div>;
  }
};

// const mapStateToProps = (state, props) => {
//   return {
//     user: state.users.filter(
//       user => user.id === Number(props.match.params.user_id)
//     )[0]
//   };
// };
export default connect()(ConversationsView);
