import { Component } from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css';
import { CiSearch } from 'react-icons/ci';

class Searchbar extends Component {
    state = {
        search: "",
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    };

    handlerSubmit = (event) => {
        event.preventDefault();
        const { onSubmit } = this.props;
        onSubmit( this.state.search );
        this.reset();
    };

    reset() {
        this.setState({
            search: "",
        })
    }
    render() {
        const { search } = this.state;
        const { handleChange, handlerSubmit} = this;
        return (
            <div>
            <header className={css.searchbar}>
            <form className={css.searchForm} onSubmit={handlerSubmit}>
                        <button type="submit" className={css.button}>
                            <CiSearch/>
                <span className={css.buttonLabel}>Search</span>
                </button>
                <input
                    onChange={handleChange}
                    value={search} name="search"
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
            </header>
            </div>
        )
    }
} 
export default Searchbar;

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
}