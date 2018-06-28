import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    this.props.onSearchTermChange(this.state.value)
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="text" value={this.state.value}></input>
      </form>
    )
  }
}

export default SearchBar;
