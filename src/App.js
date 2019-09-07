import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import Profile from "./components/profile/Profile";
import Friends from "./components/friends/FriendsList";
import Conversations from "./components/conversations/Conversations";

import { connect } from "react-redux";
import { fetchStatuses } from "./store/statuses/actions";
import { getUsers } from "./store/users/actions";
import { fetchFriends } from "./store/friends/actions";
import { fetchConvos } from "./store/conversations/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchMessages } from "./store/messages/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStatuses());
    this.props.dispatch(getUsers());
    this.props.dispatch(fetchFriends());
    this.props.dispatch(fetchConvos());
    this.props.dispatch(fetchMessages(this.props.loggedInUser.id));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <TopNav />
            <div className="containter d-flex">
              <SideNav />
              <Switch>
                {/* <Route exact path="/" component={Login} /> */}
                <Route path="/homepage" component={Dashboard} />
                <Route path="/profile/:user_id" component={Profile} />
                <Route path="/friends" component={Friends} />
                <Route exact path="/conversations" component={Conversations} />
                <Route
                  exact
                  path="/conversations/:id"
                  component={Conversations}
                />
              </Switch>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser
});

export default connect(mapStateToProps)(App);
