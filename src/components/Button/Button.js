import css from "./Button.module.css";
import PropTypes from "prop-types";

const LoadBtn = ({loadMoreHendler}) => {
    return (
        <button onClick={loadMoreHendler}  className={css.button}>
        <span>Load more</span>
        </button>
    )
}

LoadBtn.propTypes = {
    loadMoreHendler: PropTypes.func,
}
export default LoadBtn;