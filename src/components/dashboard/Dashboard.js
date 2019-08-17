import React from "react";
import NewStatusForm from "./NewStatusForm";
import StatusList from "./StatusList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NewStatusForm />
      <StatusList />
    </div>
  );
};

export default Dashboard;
