import React from 'react';
import { Modal, Image, Header } from 'semantic-ui-react';
import DashboardApp from './DashboardApp';
import dashboardStore from '../stores/DashboardStore';

class LoadingSourcesModal extends React.Component {
  constructor() {
    super();

    this.state = {
      open: true,
      loadingImgClasses: [],
      messageClasses: [],
      message: 'We\'re updating our list of news sources... Please wait...',
    };
  }

  componentWillMount() {
    dashboardStore.on('sourcesFetched', () => {
      this.setState({
        open: false,
      });
    });

    dashboardStore.on('fetchSourcesFailed', () => {
      this.setState({
        message: dashboardStore.message,
        loadingImgClasses: ['hidden'],
        messageClasses: ['alert', 'alert-danger'],
      });
    });
  }

  render() {
    return (
      <Modal open={this.state.open} basic dimmer size="fullscreen">
        <Header icon="refresh" content="Loading sources" />
        <Modal.Content image>
          <Image
            wrapped
            size="tiny"
            src="https://res.cloudinary.com/worldgeek/image/upload/v1493921714/blue-loader_m1txrh.gif"
            className={this.state.loadingImgClasses.join(' ')}
          />
          <Modal.Description>
            <h2
              className={this.state.messageClasses.join(' ')}
            >
              {this.state.message}
            </h2>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

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
