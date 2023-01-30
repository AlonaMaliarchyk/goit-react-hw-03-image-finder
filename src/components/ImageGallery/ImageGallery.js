import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, showModal }) => {
    return (
        <>
            <ul className={css.imageGallery}>
                {images.map(image =>
                    <ImageGalleryItem showModal={()=>showModal(image.webformatURL) }
                    key={image.id} id={image.id} imgUrl={image.webformatURL} title={image.tags} />                
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
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        showModal:  PropTypes.func,
    })).isRequired,
}