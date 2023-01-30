import { Component } from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown",this.closeModal)}
        
    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal)
    }
    closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape'){
        this.props.close();
    }
    };
    render() {
        const { largeImageURL} = this.props;
        const { closeModal } = this;
        return (
            createPortal(
            <div className={css.overlay} onClick={closeModal}>
            <div className={css.modal}>
            <img src={largeImageURL} alt="largeImageURL" />
            </div>
            </div>,
            modalRoot
        )
        
    )
}
}
Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
}
export default Modal;