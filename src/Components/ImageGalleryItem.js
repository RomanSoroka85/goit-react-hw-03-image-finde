import React from 'react'
import s from '../style.css'
const ImageGalleryItem = ({ image }) => {
  return (
    <>
      <li className={s.mageGalleryItem}>
        <img
          src="https://pixabay.com/photos/hands-ipad-tablet-technology-820272/"
          alt=" "
          className={s.ImageGalleryItemImage}
        />
      </li>
    </>
  )
}

export default ImageGalleryItem
