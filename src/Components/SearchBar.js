import React from 'react'

class SearchBar extends React.Component {
  render() {
      return <div> 
          <form>
              <input 
              type="text"
              placeholder="Search"
              label="Search"/>
          </form>
      </div>
  }
}

export default SearchBar;