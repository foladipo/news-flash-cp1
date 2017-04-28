import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, description, url, imageUrl, author, publishedAt } = this.props;
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const googleShareLink = `https://plus.google.com/share?url=${url}`;
    const twitterShareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}&`;
    
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
            <div className='col-xs-12'>
              <div className='btn-group pull-right'>
                <button type='button' className='btn btn-success dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  Share <span className='caret'></span>
                </button>
                <ul className='dropdown-menu'>
                  <li><a href={facebookShareLink} target='_blank'>Facebook</a></li>
                  <li><a href={googleShareLink} target='_blank'>Google+</a></li>
                  <li><a href={twitterShareLink} target='_blank'>Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
