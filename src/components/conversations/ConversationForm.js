import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input, InputGroup, Label, Row, Col } from "reactstrap";
import { addMessage } from "../../store/messages/actions";
import FriendsListFilter from "./FriendsListFilter";

class ConversationForm extends Component {
  state = {
    newConvoMsg: "",
    newConvoTo: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () =>
      console.log("NEWCONVOTO:", this.state.newConvoTo)
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("CURRENTUSER:", this.props.currentUser.id);
    console.log("PROPS:", this.props);
    this.props.addMessage({
      sender_id: this.props.currentUser.id,
      recipient_id: Number(this.state.newConvoTo),
      body: this.state.newConvoMsg
    });
    this.setState({ newConvoMsg: "", newConvoTo: "" });
  };

  render() {
    const recipient_id = this.props.users.reduce((acc, user) => {
      if (this.state.newConvoTo === user.name) {
        acc.push(user.id);
      }
      return acc;
    }, []);
    const recipient_name = this.props.users.reduce((acc, user) => {
      if (this.state.newConvoTo === user.name) {
        acc.push(user.name);
      }
      return acc;
    }, []);

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

    let filterFriendsList = listOfFriends
      .filter(friend => {
        if (friend.requesteeId == this.props.recipient_id) {
          this.props.recipient_name.includes(
            this.state.newConvoTo.charAt(0).toUpperCase()
          );
        }
      })
      .map((id, i) => <FriendsListFilter key={i} other_user_id={id} />);
    console.log("recipient:", this.props.recipient);
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
                <select
                  id="newConvoTo"
                  name="newConvoTo"
                  value={this.state.newConvoTo}
                  onChange={this.handleChange}
                >
                  {this.props.users.map(user => (
                    <option value={user.id}>{user.name}</option>
                  ))}
                </select>

                <div>{filterFriendsList}</div>
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
  return {
    friends: state.friends.all,
    users: state.users.all,
    currentUser: state.users.loggedInUser
  };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(ConversationForm);
