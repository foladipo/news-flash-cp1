import React from 'react';
import DashboardApp from './DashboardApp';
import LoadingSourcesModal from './LoadingSourcesModal';

/**
 * This Component houses the DashboardApp and LoadingSourceModal components.
 * @return: a Component that can/will be rendered as HTML.
 */
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
