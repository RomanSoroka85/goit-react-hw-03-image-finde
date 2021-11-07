import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import ApiInfo from './Components/ApiInfo'

// import { v4 as uuid } from 'uuid'
import Button from './Components/Button'
import ImageGallery from './Components/ImageGallery'

import Loader from './Components/Loader'
import Modal from './Components/Modal'
import Searchbar from './Components/Searchbar'

export default class App extends Component {
  state = { galery: null, q: '', page: 1, inputValue: '' }
  // const BASE_URL =`https://pixabay.com/api/?q=${input}&page=1&key=18864788-659534fccb4bfac7e1ae65a8e&image_type=photo&orientation=horizontal&per_page=12`
  // componentDidMount() {
  //   const galery = fetch(
  //     'https://pixabay.com/api/?q=${input}&page=1&key=18864788-659534fccb4bfac7e1ae65a8e&image_type=photo&orientation=horizontal&per_page=12',
  //   )
  //     .then((res) => res.json())
  //     .then(console.log)
  // }
  onHandleSubmit = (inputValue) => {
    this.setState({ inputValue })
    console.log(inputValue)
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onHandleSubmit} />
        <ApiInfo inputValue={this.state.inputValue} />
        <ImageGallery image={this.state.galery} />

        <Loader />
        <Button />
        <Modal />
        <ToastContainer autoClose={3000} />
      </>
    )
  }
}
