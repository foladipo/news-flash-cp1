import React from 'react';
import DashboardAppContainer from './DashboardAppContainer';

function DashboardContainer() {
  return (
    <div>
      <div className="col-lg-2 col-md-1 col-sm-0" />
      <DashboardAppContainer />
      <div className="col-lg-2 col-md-1 col-sm-0" />
    </div>
  );
}

export default DashboardContainer;
