import React from 'react';
import DashboardApp from './DashboardApp';
import LoadingSourcesModal from './LoadingSourcesModal';

/**
 * This Component houses the DashboardApp and LoadingSourceModal components.
 * @return {ReactComponent|null|false} - A Component for DOM rendering.
 */
export default function DashboardContainer() {
  return (
    <div>
      <LoadingSourcesModal />
      <DashboardApp />
    </div>
  );
}
