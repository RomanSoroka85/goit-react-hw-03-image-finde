import React from "react";
import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {};
  render() {
    return (
      <li className="ImageGalleryItem">
        <img src="" alt="" className="ImageGalleryItemImage" />
      </li>
    );
  }
}
