import React, { Component } from 'react'

class ApiInfo extends Component {
  state = {
    galery: null,
    loading: false,
  }
  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.inputValue
    const nextValue = this.props.inputValue
    if (prevValue !== nextValue) {
      fetch(
        `https://pixabay.com/api/?q=${nextValue}&page=1&key=18864788-659534fccb4bfac7e1ae65a8e&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then((res) => res.json())
        .then((galery) => this.setState({ galery }))
        .finally(() => this.setState({ loading: false }))
    }
  }
  render() {
    const { loading, galery } = this.state
    const { inputValue } = this.props
    return (
      <>
        {loading && <div>loading...</div>}
        {!inputValue && <div>enter text...</div>}
        {galery && <div>{}</div>}
        <div>{galery && <div>{galery.total}</div>}</div>
      </>
    )
  }
}

export default ApiInfo
