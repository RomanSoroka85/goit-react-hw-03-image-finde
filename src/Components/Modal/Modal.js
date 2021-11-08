import React, { Component } from "react";
import s from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}><img src={this.props.src}/></div>
      </div>
    );
  }
}
