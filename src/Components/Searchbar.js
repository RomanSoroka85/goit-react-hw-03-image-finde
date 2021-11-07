import React, { Component } from 'react'
import s from '../style.css'
class Searchbar extends Component {
  state = {
    inputValue: '',
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.inputValue.trim() === '') {
      alert('введите значение')
      return
    }
    this.props.onSubmit(this.state.inputValue)
    this.setState({ inputValue: '' })
  }
  handleInput = (event) => {
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() })
  }

  render() {
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <input
              className={s.SearchFormInput}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              value={this.state.inputValue}
              onInput={this.handleInput}
            />
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>
          </form>
        </header>
      </>
    )
  }
}

export default Searchbar
