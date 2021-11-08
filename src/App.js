import React, { Component } from "react";

import ImageGallery from "./Components/ImageGallery/ImageGallery";
// import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
// import Loader from "./Components/Loader/Loader";
// import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
// import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ showModal: !this.state.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <ImageGallery />

        <div>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h2>modal title</h2>

              <button type="button" onClick={this.toggleModal}>
                close modal
              </button>
            </Modal>
          )}
        </div>
      </>
    );
  }
}
