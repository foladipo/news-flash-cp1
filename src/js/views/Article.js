import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, description, url, imageUrl, author, publishedAt } = this.props;
    
    return (
      <div className='row'>
        <div className='col-md-2'>
          <a href={url} target='_blank'><img src={imageUrl}/></a>
        </div>
        <div className='col-md-10'>
          <a href={url} target='_blank'><span>{description}</span></a>
          <p>{description}</p>
          <div>
            <span>Published at: {publishedAt}</span>
            <span>Written by: {author}</span>
          </div>
          <span className='btn btn-info'>{id}</span>
        </div>
      </div>
    );
  }
}
