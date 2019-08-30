import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import Misc from "./components/misc/Misc";
import Profile from "./components/profile/Profile";
import FriendsList from "./components/friends/FriendsList";
import Conversations from "./components/conversations/Conversations";

import { connect } from "react-redux";
import { fetchStatuses } from "./store/statuses/actions";
import { getUsers } from "./store/users/actions";
import { fetchFriends } from "./store/friends/actions";
import { fetchConvos } from "./store/conversations/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStatuses());
    this.props.dispatch(getUsers());
    this.props.dispatch(fetchFriends());
    this.props.dispatch(fetchConvos());
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
                {/* <Route path="/friends" component={FriendsList} /> */}
                <Route path="/conversations" component={Conversations} />
              </Switch>
              <Misc />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
