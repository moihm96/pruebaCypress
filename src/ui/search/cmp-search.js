import React from 'react'

const Search = ({ onChange, value }) => (
  <input
    class="search-pokemon"
    type="text"
    onChange={onChange}
    value={value}
    placeholder="Enter pokemon name..."
    autoFocus
  />
)

export default Search
