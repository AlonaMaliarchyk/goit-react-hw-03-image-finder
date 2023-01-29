import { Component } from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox'

class Modal extends Component {
    render() {
        const { children } = this.props;
    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                {children}
                {/* <img src={largeImageURL} alt={tags} /> */}
            </div>
        </div>
    )
}
   
}
Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}
export default Modal;