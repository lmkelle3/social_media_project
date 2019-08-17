import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import Misc from "./components/misc/Misc";
import { connect } from "react-redux";
import { fetchStatuses } from "./store/statuses/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStatuses());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <TopNav />
            <div className="containter d-flex">
              <SideNav />
              <Dashboard />
              <Misc />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    statuses: state.statuses
  };
};

export default connect(mapStateToProps)(App);
