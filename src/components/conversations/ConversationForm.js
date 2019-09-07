import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input, InputGroup, Label, Row, Col } from "reactstrap";

class ConversationForm extends Component {
  state = {
    newConvo: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addConvo({
      sender_id: this.props.loggedInUser.id,
      recipient_id: Number(this.props.other_person),
      newConvo: { content: [this.state.newConvoTo, this.state.newConvo] }
    });
    // this.props.dispatch(postMessage({ content: this.state.newMessage }));
  };

  render() {
    // let listOfFriends = this.props.users
    // .filter(user =>
    //   user.name.includes(this.state.newMessage.charAt(0).toUpperCase())
    // )
    // .map(user => (
    //     <FriendListItem
    //       friend={friend}
    //       key={user.id}
    //     />
    //   ));)
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
              </Row>
              <Row>
                <p className="mt-2">Body:</p>
                <Input
                  id="newConvo"
                  name="newConvo"
                  value={this.state.newConvo}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Button
                  disabled={!this.state.newConvo && !this.state.newConvoTo}
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

// const mapStateToProps = state, props => {

// }

export default connect()(ConversationForm);
