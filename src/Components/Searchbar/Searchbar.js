import React, { Component } from "react";
import s from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = { inputValue: "" };

  hendleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputValue);
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            value={this.state.inputValue}
            onChange={this.hendleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
