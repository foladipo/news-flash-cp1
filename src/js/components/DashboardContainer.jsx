import React from 'react';
import DashboardApp from './DashboardApp';
import LoadingSourcesModal from './LoadingSourcesModal';

function DashboardContainer() {
  return (
    <div>
      <div className="col-lg-2 col-md-1 col-sm-0" />
      <LoadingSourcesModal />
      <DashboardApp />
      <div className="col-lg-2 col-md-1 col-sm-0" />
    </div>
  );
}

export default DashboardContainer;
