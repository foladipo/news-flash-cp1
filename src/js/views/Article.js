import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, description, url, imageUrl, author, publishedAt } = this.props;
    
    let publishDate = '';
    if (publishedAt) {
      publishDate = publishedAt.split('T')[0];
    }
    return (
      <div className='row article quarter-horizontal-whitespace'>
        <div className='col-xs-4'>
          <a href={url} target='_blank'><img src={imageUrl} className='img-responsive img-thumbnail'/></a>
        </div>
        <div className='col-xs-8'>
          <a href={url} target='_blank'><span className='article-title'>{title}</span></a>
          <div className=''>
            <ul className='list-inline'>
              <li>At: <b>{publishDate}</b></li>
              <li>By: <b>{author}</b></li>
            </ul>
          </div>
          <p className='article-description'>{description}</p>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
