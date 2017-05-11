import React from 'react';
import { Modal, Image, Header } from 'semantic-ui-react';
import dashboardStore from '../stores/DashboardStore';

/**
 * This shows a modal dialog while the app retrieves a list of news sources and
 * their various sort options. If the retrieval is successful, this Component
 * hides itself. But if not, it shows an error message.
 * @extends React.Component
 */
export default class LoadingSourcesModal extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();

    this.state = {
      open: true,
      loadingImgClasses: [],
      messageClasses: [],
      message: 'We\'re updating our list of news sources... Please wait...',
    };
  }

  /**
   * Contains callbacks that update this Component whenever a Store
   * it depends on changes.
   */
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

  /**
   * @return - HTML representation of this modal dialog for DOM rendering.
   */
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
