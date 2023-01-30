import PropTypes from "prop-types";
import css from "./imageGalleryItem.module.css";
const ImageGalleryItem=({imgUrl, title, id, showModal})=>{
    return (
        <>
            <li key={id } onClick={ showModal}  className={css.ImageGalleryItem}>
                <img  className={css.ImageGalleryItemImage} src={imgUrl} alt={title}></img>
            </li>
        </>
)
}
ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    showModal:PropTypes.func.isRequired,
}

export default ImageGalleryItem;