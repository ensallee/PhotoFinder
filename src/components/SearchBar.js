import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <input
        onChange={props.changeSearchTermState}
        type="text"
        placeholder="Search photos"
        value={props.term}></input>
    </form>
  )
}

export default SearchBar;
