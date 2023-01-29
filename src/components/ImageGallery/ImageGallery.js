import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
    return (
        <>
            <ul className={css.ImageGallery}>
                {images.map(image =>
                    <ImageGalleryItem key={image.id} id={ image.id} imgUrl={image.webformatURL } title={image.tags } />                
                )}
            </ul>
        </>
    )
}
export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf
    (PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })).isRequired,
}