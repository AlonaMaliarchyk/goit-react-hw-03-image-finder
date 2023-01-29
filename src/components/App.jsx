import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar";
import Loader from "./Loader";
import LoadBtn from "./Button";
import Modal from "./Modal";
import { searchPhoto }  from "./shared/services/posts-api.js";
import css from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    search: "",
    error: null,
    loading: false,
    page: 1,
    isMoreBtnVisible: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fethImg();
      }
  }

  async fethImg (){
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchPhoto(search, page);
      console.log(data.hits);
      if (data.totalHits > 0) {
        this.setState(({ images }) => ({
          images: [...images, ...data.hits],
          isMoreBtnVisible: page < Math.ceil(data.totalHits / 12),
        }))
      }
    } catch(error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  handlerSearch = (value) => {
    this.setState({ search: value ,images:[], page: 1})
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }))
    console.log('3333', this.state);
  }

  render() {
    const { images, loading, error, isMoreBtnVisible } = this.state;
    const { handlerSearch, loadMore } = this;

    return (
        <>
        <Searchbar onSubmit={handlerSearch} />
        <ImageGallery images={images} />
        {error && <p className={css.error}>Something went wrong. Please, try again later!</p>}
        {loading && <Loader />}
        {isMoreBtnVisible && <LoadBtn loadMoreHendler={loadMore} />}
        
        </>
  );
  }
};

export default App;
