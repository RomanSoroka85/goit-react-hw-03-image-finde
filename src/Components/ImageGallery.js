import React from 'react'
import s from '../style.css'
import ImageGalleryItem from './ImageGalleryItem'
const ImageGallery = ({ image }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem image={image} />
      </ul>
    </>
  )
}

export default ImageGallery
