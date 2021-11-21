import React, { Component } from "react";
import Loader from "../Loader/Loader.js";
import Modal from "../Modal/Modal.js";
import Searchbar from "../Searchbar/Searchbar";
import articlesApi from "../../services/articlesApi.js";

// import axios from "axios";
import s from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    isOpenModal: false,
    src: "",
    //  offset: 0,
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log('this.state :>> ', this.state);
    this.fetchArticles("");
  }

  fetchArticles = (searchQuery, page) => {
    console.log('searchQuery :>> ', searchQuery);
    // const {searchQuery, page} =this.state
    articlesApi
      .fatchArticlesWithQuery(searchQuery, page)
      .then((articles) =>
        this.setState((prevState) => ({
         
          articles,
          page: prevState.page + 1,
          searchQuery,
         
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
scroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight-800,
      behavior: "smooth",
    });
   }
  
 loadMore = () => { 
  articlesApi 
    .fatchArticlesWithQuery(this.state.searchQuery, this.state.page) 
    .then((articles) => {
      this.setState((prevState) => ({ 
        articles: [...prevState.articles, ...articles], 
        page: prevState.page + 1, 
      }))
setTimeout(() => {
      this.scroll()
    }, 400);
    })
    .catch((error) => this.setState({ error })) 
    .finally(() => this.setState({ loading: false })); 
};
     

  openModal = (e) => {
    console.log(e.target.dataset.largeimage);
    this.setState({ isOpenModal: true, src: e.target.dataset.largeimage });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false, src: "" });
  };

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.fetchArticles} />
        <div className={s.imageGallery}>
          {error && <p>Whoops, something went wrong: {error.message}</p>}

          {isLoading && <Loader message="Loading..." />}
          {this.state.isOpenModal && (
            <Modal src={this.state.src} closeModal={this.closeModal} />
            )}
          {articles.length > 0 && (
            <>
              <ul className={s.imageGalleryItemImage}>
                {this.state.articles.map((articles) => (
                  <li className={s.imageGalleryItem} key={articles.id}>
                
                    <img
                      src={articles.previewURL}
                      alt={articles.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.imageGalleryItemImage}
                      data-largeimage={articles.largeImageURL}
                      onClick={this.openModal}
                      />
                    
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={this.loadMore}
                className={s.Button}
                >
                Load more
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

// const BASE_URL = "https://pixabay.com/api";
//     const API_KEY = "18864788-659534fccb4bfac7e1ae65a8e";

//     axios.defaults.baseURL = BASE_URL;
//     axios.defaults.params = {
//       key: API_KEY,
//       image_type: "photo",
//       orientation: "horizontal",
//       per_page: 12,
//     };
//     const imageGallery = async ({ q, page }) => {
//       try {
//         const { data } = await axios.get("", {
//           params: { q, page },
//         });
//         return data.hits;
//       } catch (error) {
//         console.log("error", { error });
//         return [];
//       }
//     };
