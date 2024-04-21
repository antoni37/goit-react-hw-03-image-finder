import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './imageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          data-largeimg={this.props.image.largeImageURL}
          onClick={e => {
            this.props.onImgClick(e.target.dataset.largeimg);
          }}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;