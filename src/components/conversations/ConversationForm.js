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
    const { newConvoTo, newConvo, messages } = this.state;
    this.setState({
      messages: [...messages, newConvo, newConvoTo],
      newConvoTo: { content: this.state.newConvoTo },
      newMessage: { content: this.state.newConvo }
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
                  id="newMessageTo"
                  name="newMessageTo"
                  value={this.state.newConvoTo}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <p className="mt-2">Body:</p>
                <Input
                  id="newMessage"
                  name="newMessage"
                  value={this.state.newConvo}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Button
                  disabled={!this.state.newMessage && !this.state.newMessageTo}
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
