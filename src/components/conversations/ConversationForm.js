import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input, InputGroup, Label, Row, Col } from "reactstrap";
import { addConvo } from "../../store/conversations/actions";
import FriendsListFilter from "./FriendsListFilter";

class ConversationForm extends Component {
  state = {
    newConvoMsg: "",
    newConvoTo: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addConvo({
      sender_id: this.props.currentUser,
      recipient_id: this.props.recipient,
      newConvo: { content: [this.state.newConvoTo, this.state.newConvoMsg] }
    });
    this.setState({ newConvoMsg: "", newConvoTo: "" });
  };

  render() {
    let listOfFriends = [];
    const currentUser = this.props.currentUser.id;

    this.props.friends.map(friend => {
      if (friend.requesteeId === currentUser && friend.accepted === true) {
        listOfFriends.push(friend);
      } else if (
        friend.requestorId === currentUser &&
        friend.accepted === true
      ) {
        listOfFriends.push(friend);
      }
    });
    console.log("LOF:", listOfFriends);

    const user_id = this.props.users.filter(user => user.id);
    const user_name = this.props.users.filter(user => user.name);

    let filterFriendsList = listOfFriends
      .filter((friend => {
        if (friend.requesteeId === user_id) {
          user_name.includes(this.state.newConvoTo.charAt(0).toUpperCase());
        }
      })
      .map((id, i) => <FriendsListFilter key={i} other_user_id={id} />);

    console.log("filterFriendsList:", filterFriendsList);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label>
              <h4 className="mt-2">Start New Conversation</h4>
            </Label>
          </div>
          <InputGroup>
            <Col>
              <Row>
                <p>To:</p>
                <Input
                  id="newConvoTo"
                  name="newConvoTo"
                  value={this.state.newConvoTo}
                  onChange={this.handleChange}
                />
                <div>{filterList}</div>
              </Row>
              <Row>
                <p className="mt-2">Body:</p>
                <Input
                  id="newConvoMsg"
                  name="newConvoMsg"
                  value={this.state.newConvoMsg}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Button
                  disabled={!(this.state.newConvoMsg && this.state.newConvoTo)}
                  className="btn-sm mt-2"
                  type="submit"
                  color="primary"
                >
                  Send
                </Button>
              </Row>
            </Col>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("Friends:", state.friends.all);
  console.log("OP:", state.other_person);
  return {
    friends: state.friends.all,
    users: state.users.all,
    currentUser: state.users.loggedInUser,
    recipient: this.props.users.reduce((acc, user) => {
      if (this.state.newConvoTo === user.name) {
        acc.push(user.id);
      }
      return acc;
    }, [])
  };
};

export default connect(
  mapStateToProps,
  { addConvo }
)(ConversationForm);
